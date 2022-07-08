import { STORE } from '../api/store';
import { COLORS } from '../constants/colors';
import { TaskType } from '../types/task-type';
import { setDraggable } from './drag-and-drop';
import { elements } from './elements';

function createElement({ comments, date, description, priority, tags, id }: TaskType): Element {
  const li = document.createElement('li');
  li.className =
    'bg-white flex flex-col gap-2 rounded-lg p-2 shadow transition-shadow ease-in-out hover:shadow-md cursor-grab active:cursor-grabbing';
  li.draggable = true;
  li.id = String(id);

  const topDiv = document.createElement('div');
  topDiv.className = 'flex justify-between';

  const descriptionParagraph = document.createElement('p');
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  descriptionParagraph.className = `text-sm font-bold text-${color}-500`;
  descriptionParagraph.textContent = description;
  topDiv.appendChild(descriptionParagraph);

  const editButton = document.createElement('button');
  editButton.className = 'text-sm text-gray-600 hover:text-gray-700';
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    return;
  });

  li.appendChild(topDiv);

  return li;
}

export function render(): void {
  const { finishedContainer, inReviewContainer, wipContainer, backlogContainer } = elements;
  const containers = [finishedContainer, inReviewContainer, wipContainer, backlogContainer];
  for (const container of containers) {
    container.innerHTML = '';
  }

  STORE.forEach((task: TaskType) => {
    switch (task.status) {
      case 'finished':
        elements.finishedContainer.appendChild(createElement(task));
        break;
      case 'in-review':
        elements.inReviewContainer.appendChild(createElement(task));
        break;
      case 'work-in-progress':
        elements.wipContainer.appendChild(createElement(task));
        break;
      case 'backlog':
        elements.backlogContainer.appendChild(createElement(task));
        break;
      default:
        break;
    }
  });

  for (const container of containers) {
    if (container.children.length === 0) {
      container.innerHTML = '<p class="text-center font-medium text-red-600">No tasks found</p>';
    }
  }
  console.log('rendered');
  setDraggable();
}
