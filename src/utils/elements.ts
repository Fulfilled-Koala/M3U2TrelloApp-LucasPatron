function getElement(query: string): Element {
  const el = document.querySelector(query);
  if (!el) throw new Error(`Element not found: ${query}`);
  return el;
}

export const saveButton = getElement('#save-button') as HTMLButtonElement;
