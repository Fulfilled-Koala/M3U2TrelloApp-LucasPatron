function getHTMLElement<T extends HTMLElement>(query: string): T {
  const el = document.querySelector<T>(query);
  if (!el) {
    alert(`Element not found: ${query}`);
    throw new Error(`Element not found: ${query}`);
  }
  return el;
}

function getElement<T extends Element>(query: string): T {
  const el = document.querySelector<T>(query);
  if (!el) {
    alert(`Element not found: ${query}`);
    throw new Error(`Element not found: ${query}`);
  }
  return el;
}

function getAllElements<T extends HTMLElement>(query: string): NodeListOf<T> {
  const els = document.querySelectorAll<T>(query);
  if (!els.length) {
    alert(`No elements found: ${query}`);
    throw new Error(`No elements found: ${query}`);
  }
  return els;
}

export function getAllListItems(): NodeListOf<HTMLLIElement> {
  return getAllElements("li") as NodeListOf<HTMLLIElement>;
}

export const elements = {
  containers: {
    backlogContainer: getHTMLElement<HTMLUListElement>("#backlog"),
    wipContainer: getHTMLElement<HTMLUListElement>("#work-in-progress"),
    inReviewContainer: getHTMLElement<HTMLUListElement>("#in-review"),
    finishedContainer: getHTMLElement<HTMLUListElement>("#finished"),
  },
  clearAllModal: {
    modal: getHTMLElement<HTMLDivElement>("#clear-all-modal"),
    openButton: getHTMLElement<HTMLButtonElement>("#clear-all"),
    closeButton: getHTMLElement<HTMLButtonElement>("#clear-all-modal-close"),
  },
  addTaskModal: {
    modal: getHTMLElement<HTMLDivElement>("#add-task-modal"),
    inputs: {
      description: getHTMLElement<HTMLInputElement>("#add-task-modal-description-input"),
      tags: getHTMLElement<HTMLInputElement>("#add-task-modal-tags-input"),
      priority: getHTMLElement<HTMLSelectElement>("#add-task-modal-priority-select"),
      status: getHTMLElement<HTMLSelectElement>("#add-task-modal-status-select"),
      dueDate: getHTMLElement<HTMLInputElement>("#add-task-modal-due-date-input"),
    },
    form: getHTMLElement<HTMLFormElement>("#add-task-modal-form"),
    closeButton: getHTMLElement<HTMLButtonElement>("#add-task-modal-close"),
    openButton: getHTMLElement<HTMLButtonElement>("#add-task-modal-button"),
  },
  editTaskModal: {
    modal: getHTMLElement<HTMLDivElement>("#edit-task-modal"),
    submitButton: getHTMLElement<HTMLButtonElement>("#edit-task-modal-submit"),
    closeButton: getHTMLElement<HTMLButtonElement>("#edit-task-modal-close"),
    deleteButton: getHTMLElement<HTMLButtonElement>("#edit-task-modal-delete"),
    title: getHTMLElement<HTMLHeadingElement>("#edit-task-modal-title"),
    inputs: {
      description: getHTMLElement<HTMLInputElement>("#edit-task-modal-description-input"),
      priority: getHTMLElement<HTMLInputElement>("#edit-task-modal-priority-input"),
      tag: getHTMLElement<HTMLInputElement>("#edit-task-modal-tags-input"),
      dueDate: getHTMLElement<HTMLInputElement>("#edit-task-modal-due-date-input"),
    },
  },
  toasts: {
    success: {
      toast: getHTMLElement<HTMLDivElement>("#toast-success"),
      closeButton: getHTMLElement<HTMLButtonElement>("#toast-success-close"),
      message: getHTMLElement<HTMLParagraphElement>("#toast-success-message"),
    },
    error: {
      toast: getHTMLElement<HTMLDivElement>("#toast-danger"),
      closeButton: getHTMLElement<HTMLButtonElement>("#toast-danger-close"),
      message: getHTMLElement<HTMLParagraphElement>("#toast-danger-message"),
    },
  },
  comments: {
    modal: getHTMLElement<HTMLDivElement>("#comment-modal"),
    commentsContainer: getHTMLElement<HTMLUListElement>("#comment-section"),
    inputs: {
      username: getHTMLElement<HTMLInputElement>("#comment-username-input"),
      textarea: getHTMLElement<HTMLTextAreaElement>("#comment-textarea"),
    },
    charactersRemaining: getHTMLElement<HTMLSpanElement>("#comment-characters-remaining"),
    submit: getHTMLElement<HTMLButtonElement>("#comment-submit"),
    cancel: getHTMLElement<HTMLButtonElement>("#comment-cancel"),
  },
  theme: {
    toggle: getHTMLElement<HTMLButtonElement>("#theme-toggle"),
    dark: getElement<SVGElement>("#theme-toggle-dark-icon"),
    light: getElement<SVGElement>("#theme-toggle-light-icon"),
  },
};
