import httpDeleteOne from '../api/delete-one';
import httpPatchOne from '../api/patch-one';
import { TaskType } from '../types/task-type';
import { elements } from '../utils/elements';

const { closeButton, modal, inputs, title, submitButton, deleteButton } = elements.editTaskModal;

export function setEditTaskModalListeners() {
  closeButton.onclick = () => {
    modal.classList.add('hidden');
  };
}

export function setEditTaskModal(task: TaskType) {
  const { description, priority, tag } = task;
  modal.classList.remove('hidden');
  title.innerHTML = `<span class='text-black text-xs dark:text-white'>CURRENTLY EDITING:</span> ${description}`;
  inputs.description.value = description;
  inputs.priority.value = priority;
  inputs.tag.value = tag;

  submitButton.onclick = async () => {
    if (!['high', 'medium', 'low'].includes(inputs.priority.value)) {
      return alert('Priority must be high, medium, or low');
    }

    const newTask: TaskType = {
      ...task,
      description: inputs.description.value,
      priority: inputs.priority.value as 'low' | 'medium' | 'high',
      tag,
    };

    await httpPatchOne(newTask);
    modal.classList.add('hidden');
  };

  deleteButton.onclick = async () => {
    await httpDeleteOne(task.id);
    modal.classList.add('hidden');
  };
}
