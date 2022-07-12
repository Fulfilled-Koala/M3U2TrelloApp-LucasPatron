import httpPatchComment from "../api/patch/patch-comment";
import showErrorToast from "../toasts/error";
import { Task } from "../types/task-type";
import { elements } from "../utils/elements";

const { cancel, charactersRemaining, commentsContainer, inputs, modal, submit } = elements.comments;

function invalidInput(comment: string, username: string): boolean {
  if (comment === "" || username === "") return true;
  if (comment.length > 150) return true;
  if (comment.split(" ").filter((word: string) => word.length > 20).length > 0) return true;
  return false;
}

function resetState() {
  inputs.textarea.value = "";
  inputs.username.value = "";
  charactersRemaining.textContent = `0/150`;
  commentsContainer.innerHTML = "";
}

function loadComments(task: Task) {
  commentsContainer.innerHTML = "";
  for (const { comment, username, publishedAt } of task.comments) {
    const publishedAtString = new Date(publishedAt).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const li = `
        <li class="space-y-4">
          <div class="flex">
            <div
              class="max-w-full flex-1 rounded-lg border px-4 py-2 leading-relaxed dark:border-neutral-600 sm:px-6 sm:py-4"
            >
              <strong class="dark:text-neutral-200">${username}</strong>
              <span class="text-xs text-gray-400 dark:text-neutral-300">${publishedAtString}</span>
              <p class="text-sm break-word dark:text-neutral-200">${comment}</p>
            </div>
          </div>
        </li>
  `;
    commentsContainer.insertAdjacentHTML("beforeend", li);
  }
}

export function setCommentModal(task: Task) {
  modal.classList.remove("hidden");

  cancel.onclick = () => {
    resetState();
    modal.classList.add("hidden");
  };

  if (task.comments.length === 0) {
    commentsContainer.innerHTML =
      '<p class="text-center text-neutral-700 dark:text-neutral-300">Such empty...</p>';
  } else {
    loadComments(task);
  }

  let commentInput = "";
  let usernameInput = "";

  inputs.textarea.oninput = (e: Event) => {
    commentInput = (e.target as HTMLTextAreaElement).value;
    charactersRemaining.textContent = `${inputs.textarea.value.length}/150`;

    submit.disabled = invalidInput(commentInput, usernameInput);

    if (commentInput.length > 150) {
      charactersRemaining.classList.add("text-red-500", "dark:text-red-400");
      charactersRemaining.classList.remove("text-indigo-500", "dark:text-indigo-400");
    } else {
      charactersRemaining.classList.remove("text-red-500", "dark:text-red-400");
      charactersRemaining.classList.add("text-indigo-500", "dark:text-indigo-400");
    }
  };

  inputs.username.oninput = (e: Event) => {
    usernameInput = (e.target as HTMLInputElement).value;
    submit.disabled = invalidInput(commentInput, usernameInput);
  };

  submit.onclick = async () => {
    if (invalidInput(inputs.textarea.value, inputs.username.value))
      return showErrorToast("Please fill in all fields");

    const updatedTask = await httpPatchComment(task.id, {
      username: inputs.username.value,
      comment: inputs.textarea.value,
    });
    loadComments(updatedTask);
  };
}
