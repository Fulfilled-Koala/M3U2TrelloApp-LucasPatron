import { editOne } from '../store/edit-one';
import { TaskType } from '../types/task-type';
import { elements } from '../utils/elements';

const { closeButton, modal, inputs, title, submitButton } = elements.editTaskModal;

export function setEditTaskModalListeners() {
  closeButton.onclick = () => {
    modal.classList.add('hidden');
  };
}

export function setEditTaskModal(task: TaskType) {
  const { description, priority, tags } = task;
  modal.classList.remove('hidden');
  title.innerHTML = `<span class='text-black text-xs'>CURRENTLY EDITING:</span> ${description}`;
  inputs.description.value = description;
  inputs.priority.value = priority;
  inputs.tags.value = tags.join(',');

  submitButton.onclick = () => {
    if (!['high', 'medium', 'low'].includes(inputs.priority.value)) {
      return alert('Priority must be high, medium, or low');
    }

    const newTask: TaskType = {
      ...task,
      description: inputs.description.value,
      priority: inputs.priority.value as 'low' | 'medium' | 'high',
      tags: inputs.tags.value.split(','),
    };

    editOne(newTask);
  };
}
