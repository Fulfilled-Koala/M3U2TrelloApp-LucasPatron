import { STORE } from "../store";
import SVGS from "../assets/svgs";
import { setEditTaskModal } from "../modals/edit-task";
import { Task } from "../types/task-type";
import { setDraggable } from "./drag-and-drop";
import { elements } from "./elements";
import { setCommentModal } from "../modals/comments";

function createElement(task: Task): Element {
  const { date, description, priority, tag, id, dueDate } = task;
  const dateObj = new Date(date);
  const dueDateObj = new Date(dueDate);
  dateObj.setDate(dateObj.getDate() + 1);
  dueDateObj.setDate(dueDateObj.getDate() + 1);

  const li = document.createElement("li");
  li.className =
    "bg-white flex flex-col px-4 py-2 gap-4 rounded-lg shadow transition-shadow ease-in-out hover:shadow-md cursor-grab active:cursor-grabbing dark:bg-[#1d1d1d]";
  li.draggable = true;
  li.id = String(id);

  const topDiv = document.createElement("div");
  topDiv.className = "flex justify-between items-center gap-4";

  const leftDiv = document.createElement("div");
  leftDiv.className = "flex flex-col";

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.className = `text-md font-medium text-black-500 dark:text-neutral-200`;
  descriptionParagraph.textContent = description;
  leftDiv.appendChild(descriptionParagraph);

  const dateSpan = document.createElement("span");
  dateSpan.insertAdjacentHTML(
    "beforeend",
    `
    <span class="text-xs font-medium text-indigo-500 dark:text-indigo-400">
    Due on ${new Date(dueDateObj).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })};
    </span>
    <span class="text-xs font-regular text-neutral-600 dark:text-neutral-200">
      created on ${new Date(dateObj).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })}
    </span>
  `,
  );
  leftDiv.appendChild(dateSpan);

  topDiv.appendChild(leftDiv);

  const rightDiv = document.createElement("div");
  rightDiv.className = "flex gap-2";

  const commentButton = document.createElement("button");
  commentButton.className = "text-gray-600 hover:text-gray-700";
  commentButton.innerHTML = SVGS.comments;
  commentButton.type = "button";
  commentButton.onclick = () => setCommentModal(task);
  rightDiv.appendChild(commentButton);

  const editButton = document.createElement("button");
  editButton.className = "text-gray-600 hover:text-gray-700";
  editButton.innerHTML = SVGS.edit;
  editButton.type = "button";
  editButton.onclick = () => setEditTaskModal(task);
  rightDiv.appendChild(editButton);

  topDiv.appendChild(rightDiv);

  li.appendChild(topDiv);

  const bodyDiv = document.createElement("div");
  bodyDiv.className = "flex flex-col";

  li.appendChild(bodyDiv);

  const footerDiv = document.createElement("div");
  footerDiv.className = "flex justify-between";

  const tagsSpan = document.createElement("span");
  tagsSpan.className = "text-xs font-medium text-white px-2 py-1 rounded bg-indigo-500";
  tagsSpan.textContent = tag
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  footerDiv.appendChild(tagsSpan);

  const prioritySpan = document.createElement("span");
  const lightBackground =
    priority === "high" ? "bg-red-500" : priority === "medium" ? "bg-amber-500" : "bg-green-500";
  const darkBackground =
    priority === "high"
      ? "dark:bg-red-600"
      : priority === "medium"
      ? "dark:bg-amber-600"
      : "dark:bg-green-600";
  prioritySpan.className = `text-xs font-medium text-white px-2 py-1 rounded ${lightBackground} ${darkBackground}`;
  prioritySpan.textContent = priority;
  footerDiv.appendChild(prioritySpan);

  li.appendChild(footerDiv);

  return li;
}

export function render(): void {
  const { finishedContainer, inReviewContainer, wipContainer, backlogContainer } =
    elements.containers;

  finishedContainer.innerHTML = "";
  inReviewContainer.innerHTML = "";
  wipContainer.innerHTML = "";
  backlogContainer.innerHTML = "";

  STORE.forEach((task: Task) => {
    switch (task.status) {
      case "finished":
        finishedContainer.appendChild(createElement(task));
        break;
      case "in-review":
        inReviewContainer.appendChild(createElement(task));
        break;
      case "work-in-progress":
        wipContainer.appendChild(createElement(task));
        break;
      case "backlog":
        backlogContainer.appendChild(createElement(task));
        break;
      default:
        break;
    }
  });

  let empty = 0;
  const containers = [finishedContainer, inReviewContainer, wipContainer, backlogContainer];
  for (const container of containers) {
    if (container.children.length === 0) {
      empty++;
      container.insertAdjacentHTML(
        "afterbegin",
        `<p class='no-tasks-found text-center font-medium text-rose-500'>No tasks found</p>`,
      );
    }
  }

  if (empty === containers.length) return;

  setDraggable();
}
