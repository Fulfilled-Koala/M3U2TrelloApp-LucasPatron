import httpDeleteOne from "../api/delete/delete-one";
import httpPatchOne from "../api/patch/patch-one";
import showErrorToast from "../toasts/error";
import { Task } from "../types/task-type";
import { elements } from "../utils/elements";

const { closeButton, modal, inputs, title, submitButton, deleteButton } = elements.editTaskModal;

export function setEditTaskModalListeners() {
  closeButton.onclick = () => {
    modal.classList.add("hidden");
  };
}

export function setEditTaskModal(task: Task) {
  const { description, priority, tag, dueDate } = task;
  modal.classList.remove("hidden");
  title.innerHTML = `<span class='text-black text-xs dark:text-white'>CURRENTLY EDITING:</span> ${description}`;
  inputs.description.value = description;
  inputs.priority.value = priority;
  inputs.tag.value = tag;
  inputs.dueDate.value = new Date(dueDate).toISOString().split("T")[0];

  submitButton.onclick = async () => {
    if (!["high", "medium", "low"].includes(inputs.priority.value)) {
      return showErrorToast("Priority must be high, medium, or low");
    }

    const newTask: Task = {
      ...task,
      description: inputs.description.value,
      priority: inputs.priority.value as "low" | "medium" | "high",
      dueDate: inputs.dueDate.value,
      tag: inputs.tag.value,
    };

    await httpPatchOne(newTask);
    modal.classList.add("hidden");
  };

  deleteButton.onclick = async () => {
    await httpDeleteOne(task.id);
    modal.classList.add("hidden");
  };
}
