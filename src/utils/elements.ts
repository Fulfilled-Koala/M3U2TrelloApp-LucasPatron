function getElement(query: string): Element {
  const el = document.querySelector(query);
  if (!el) {
    alert(`Element not found: ${query}`);
    throw new Error(`Element not found: ${query}`);
  }
  return el;
}

function getAllElements(query: string): NodeList {
  const els = document.querySelectorAll(query);
  if (!els.length) {
    alert(`No elements found: ${query}`);
    throw new Error(`No elements found: ${query}`);
  }
  return els;
}

export function getAllListItems(): NodeListOf<HTMLLIElement> {
  return getAllElements('li') as NodeListOf<HTMLLIElement>;
}

export const elements = {
  containers: {
    backlogContainer: getElement('#backlog') as HTMLUListElement,
    wipContainer: getElement('#work-in-progress') as HTMLUListElement,
    inReviewContainer: getElement('#in-review') as HTMLUListElement,
    finishedContainer: getElement('#finished') as HTMLUListElement,
  },
  saveAllModal: {
    modal: getElement('#save-all-modal') as HTMLDivElement,
    openButton: getElement('#save-all') as HTMLButtonElement,
    closeButton: getElement('#save-all-modal-close') as HTMLButtonElement,
  },
  addTaskModal: {
    modal: getElement('#add-task-modal') as HTMLDivElement,
    inputs: {
      description: getElement('#add-task-modal-description-input') as HTMLInputElement,
      tags: getElement('#add-task-modal-tags-input') as HTMLInputElement,
      priority: getElement('#add-task-modal-priority-select') as HTMLSelectElement,
      status: getElement('#add-task-modal-status-select') as HTMLSelectElement,
      dueDate: getElement('#add-task-modal-due-date-input') as HTMLInputElement,
    },
    form: getElement('#add-task-modal-form') as HTMLFormElement,
    closeButton: getElement('#add-task-modal-close') as HTMLButtonElement,
    openButton: getElement('#add-task-modal-button') as HTMLButtonElement,
  },
  editTaskModal: {
    modal: getElement('#edit-task-modal') as HTMLDivElement,
    submitButton: getElement('#edit-task-modal-submit') as HTMLButtonElement,
    closeButton: getElement('#edit-task-modal-close') as HTMLButtonElement,
    title: getElement('#edit-task-modal-title') as HTMLHeadingElement,
    inputs: {
      description: getElement('#edit-task-modal-description-input') as HTMLInputElement,
      priority: getElement('#edit-task-modal-priority-input') as HTMLInputElement,
      tags: getElement('#edit-task-modal-tags-input') as HTMLInputElement,
    },
  },
};
