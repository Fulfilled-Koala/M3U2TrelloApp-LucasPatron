import httpPatchStatus from "../api/patch/patch-status";
import { elements, getAllListItems } from "./elements";

const containers: HTMLUListElement[] = [
  elements.containers.backlogContainer,
  elements.containers.wipContainer,
  elements.containers.inReviewContainer,
  elements.containers.finishedContainer,
];
let draggedItem: null | HTMLLIElement = null;
let previousContainer: null | Element = null;

function appendPlaceholder(container: HTMLUListElement) {
  if (!container.querySelector(".placeholder") && !container.contains(draggedItem)) {
    const placeholder = document.createElement("li");
    placeholder.className =
      "placeholder bg-white opacity-50 flex flex-col px-4 py-2 gap-4 rounded-lg shadow transition-shadow ease-in-out hover:shadow-md cursor-grab active:cursor-grabbing dark:bg-[#1d1d1d]";
    placeholder.insertAdjacentHTML("afterbegin", draggedItem!.innerHTML);
    container.appendChild(placeholder);
  }
}

function handleDrop(container: HTMLUListElement) {
  if (draggedItem) container.appendChild(draggedItem);
  container.querySelector(".placeholder")?.remove();

  if (previousContainer && previousContainer.childElementCount === 0) {
    const li = document.createElement("li");
    li.className = "no-tasks-found text-center font-medium text-red-500";
    li.textContent = "No tasks found";
    previousContainer.appendChild(li);
  }

  if (container.querySelector(".no-tasks-found")) {
    container.querySelector(".no-tasks-found")?.remove();
  }
}

export function setDraggable() {
  const listItems: NodeListOf<HTMLLIElement> = getAllListItems();

  // Add drag functionality for each list item
  for (const listItem of Array.from(listItems)) {
    listItem.ondragstart = () => {
      setTimeout(() => {
        previousContainer = listItem.parentElement;

        // Add the drop zone effect
        for (const container of containers) {
          const dropZone = container.parentElement?.querySelector(".drop-zone");
          // Remove 'hidden' class from drop zone if the container is not the one the item is in
          if (container !== listItem.parentElement) {
            dropZone?.classList.remove("hidden");
            dropZone?.classList.add("flex");
          }

          container.classList.add("bg-blue-100");
          container.classList.remove("bg-slate-50");

          for (const child of Array.from(container.children)) {
            child.classList.add("pointer-events-none");
          }
        }

        draggedItem = listItem;
        listItem.style.display = "none";
      }, 0);
    };

    listItem.ondragend = async () => {
      setTimeout(() => {
        listItem.style.display = "flex";
        draggedItem = null;

        // Remove the drop zone effect
        for (const container of containers) {
          const dropZone = container.parentElement?.querySelector(".drop-zone");
          dropZone?.classList.add("hidden");
          dropZone?.classList.remove("flex");

          container.classList.remove("bg-blue-100");
          container.classList.add("bg-slate-50");

          for (const child of Array.from(container.children)) {
            child.classList.remove("pointer-events-none");
          }
        }
      }, 0);

      // Make request to update the status of the task
      const id = Number(listItem.id);
      const status = listItem.parentElement?.id as
        | "backlog"
        | "work-in-progress"
        | "in-review"
        | "finished";

      if (previousContainer !== listItem.parentElement) {
        await httpPatchStatus(id, status);
      }
    };
  }

  // Add the drop functionality for each list
  for (const container of containers) {
    const dropZone = container.parentElement?.querySelector(".drop-zone") as HTMLDivElement;

    dropZone.ondragover = (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove("animate-pulse", "border-blue-500", "bg-blue-50");
      dropZone.classList.add("border-blue-600", "bg-blue-100");
      appendPlaceholder(container);
    };

    dropZone.ondragleave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      container.querySelector(".placeholder")?.remove();
      dropZone.classList.remove("border-blue-600", "bg-blue-100");
      dropZone.classList.add("border-blue-500", "bg-blue-50", "animate-pulse");
    };

    dropZone.ondrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleDrop(container);
    };

    container.ondragover = (e) => {
      e.preventDefault();
      e.stopPropagation();
      appendPlaceholder(container);
    };

    container.ondragleave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      container.querySelector(".placeholder")?.remove();
      container.classList.remove("shadow-lg");
    };

    container.ondrop = (e) => {
      e.stopPropagation();
      e.preventDefault();
      handleDrop(container);
    };
  }
}
