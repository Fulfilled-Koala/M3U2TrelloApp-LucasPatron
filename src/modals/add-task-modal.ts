import { addOne } from '../store/add-one';
import { STORE } from '../store';
import { TaskType } from '../types/task-type';
import { elements } from '../utils/elements';

const { closeButton, form, modal, openButton, inputs } = elements.addTaskModal;

export function setAddTaskModalListeners() {
  openButton.onclick = () => {
    modal.classList.remove('hidden');
  };

  form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const {
      description: { value: descriptionValue },
      priority: { value: priorityValue },
      tags: { value: tagsValue },
      status: { value: statusValue },
      dueDate: { value: dateValue },
    } = inputs;

    const task: TaskType = {
      id: STORE.length + 1,
      tags: tagsValue.split(',').map((tag) => tag.trim()),
      description: descriptionValue,
      comments: [],
      priority: ['low', 'medium', 'high'].includes(priorityValue)
        ? (priorityValue as 'low' | 'medium' | 'high')
        : 'low',
      status: ['backlog', 'work-in-progress', 'in-review', 'finished'].includes(statusValue)
        ? (statusValue as 'backlog' | 'work-in-progress' | 'in-review' | 'finished')
        : 'backlog',
      date: new Date().toISOString(),
      dueDate: new Date(dateValue).toISOString(),
    };

    addOne(task);
    modal.classList.add('hidden');

    inputs.description.value = '';
    inputs.priority.value = 'low';
    inputs.tags.value = '';
    inputs.status.value = 'backlog';
    inputs.dueDate.value = '';
  };

  closeButton.onclick = () => {
    modal.classList.add('hidden');
  };
}
