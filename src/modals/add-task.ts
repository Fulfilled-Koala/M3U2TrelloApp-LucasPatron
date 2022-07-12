import httpPostOne from "../api/post/post-one";
import { STORE } from "../store";
import { Task } from "../types/task-type";
import { elements } from "../utils/elements";

const { closeButton, form, modal, openButton, inputs } = elements.addTaskModal;

export function setAddTaskModalListeners() {
  openButton.onclick = () => {
    modal.classList.remove("hidden");
  };

  form.onsubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const {
      description: { value: descriptionValue },
      priority: { value: priorityValue },
      tags: { value: tagsValue },
      status: { value: statusValue },
      dueDate: { value: dateValue },
    } = inputs;

    const task: Task = {
      id: STORE.length + 1,
      tag: tagsValue,
      description: descriptionValue,
      comments: [],
      priority: ["low", "medium", "high"].includes(priorityValue)
        ? (priorityValue as "low" | "medium" | "high")
        : "low",
      status: ["backlog", "work-in-progress", "in-review", "finished"].includes(statusValue)
        ? (statusValue as "backlog" | "work-in-progress" | "in-review" | "finished")
        : "backlog",
      date: new Date().toISOString(),
      dueDate: new Date(dateValue).toISOString(),
    };

    await httpPostOne(task);
    modal.classList.add("hidden");

    inputs.description.value = "";
    inputs.priority.value = "low";
    inputs.tags.value = "";
    inputs.status.value = "backlog";
    inputs.dueDate.value = "";
  };

  closeButton.onclick = () => {
    modal.classList.add("hidden");
  };
}
