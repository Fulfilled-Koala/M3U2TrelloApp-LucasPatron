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

// SAVE ALL MODAL
const saveButton = getElement('#save-all') as HTMLButtonElement;
const saveAllModal = getElement('#save-all-modal') as HTMLDivElement;
const saveAllModalClose = getElement('#save-all-modal-close') as HTMLButtonElement;

// CONTAINERS
const backlogContainer = getElement('#backlog') as HTMLUListElement;
const wipContainer = getElement('#work-in-progress') as HTMLUListElement;
const inReviewContainer = getElement('#in-review') as HTMLUListElement;
const finishedContainer = getElement('#finished') as HTMLUListElement;

// ADD TASK MODAL
const addTaskModalButton = getElement('#add-task-modal-button') as HTMLButtonElement;
const addTaskModalForm = getElement('#add-task-modal-form') as HTMLFormElement;
const addTaskModal = getElement('#add-task-modal') as HTMLDivElement;
const addTaskModalClose = getElement('#add-task-modal-close') as HTMLButtonElement;

export const elements = {
  saveButton,
  backlogContainer,
  wipContainer,
  inReviewContainer,
  finishedContainer,
  saveAllModal,
  saveAllModalClose,
  addTaskModalButton,
  addTaskModalForm,
  addTaskModal,
  addTaskModalClose,
  containers: [backlogContainer, wipContainer, inReviewContainer, finishedContainer],
};
