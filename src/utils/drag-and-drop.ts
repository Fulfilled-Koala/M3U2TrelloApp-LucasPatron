import { setStatus } from '../api/set-status';
import { elements, getAllListItems } from './elements';

const containers = elements.containers;
let draggedItem: null | Element = null;
let previousContainer: null | Element = null;

export function setDraggable() {
  const listItems: NodeListOf<HTMLLIElement> = getAllListItems();

  // Add drag functionality for each list item
  for (const listItem of listItems) {
    listItem.addEventListener('dragstart', () => {
      setTimeout(() => {
        previousContainer = listItem.parentElement;

        // Add the drop zone effect
        for (const container of containers) {
          container.classList.add('bg-blue-100');
          container.classList.remove('bg-slate-50');
        }

        draggedItem = listItem;
        listItem.style.display = 'none';
      }, 0);
    });

    listItem.addEventListener('dragend', () => {
      setTimeout(() => {
        // Set the status to the corresponding container from the STORE
        const id = Number(listItem.id);
        const status = listItem.parentElement.id as
          | 'backlog'
          | 'work-in-progress'
          | 'in-review'
          | 'finished';
        setStatus(id, status);

        listItem.style.display = 'block';
        draggedItem = null;

        // Remove the drop zone effect
        for (const container of containers) {
          container.classList.remove('bg-blue-100');
          container.classList.add('bg-slate-50');
        }
      }, 0);
    });
  }

  // Add the drop functionality for each list
  for (const container of containers) {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
      container.classList.add('shadow-lg');
    });

    container.addEventListener('dragenter', (e) => {
      e.preventDefault();
    });

    container.addEventListener('dragleave', (e) => {
      e.preventDefault();
      container.classList.remove('shadow-lg');
    });

    container.addEventListener('drop', (e) => {
      e.preventDefault();
      if (draggedItem) container.appendChild(draggedItem);

      const p = container.querySelector('p');
      if (p && p.textContent === 'No tasks found') container.removeChild(p);

      if (previousContainer && previousContainer.childElementCount === 0) {
        const p = document.createElement('p');
        p.innerHTML = `<p class='text-center font-medium text-red-500'>No tasks found</p>`;
        previousContainer.appendChild(p);
      }
    });
  }
}
