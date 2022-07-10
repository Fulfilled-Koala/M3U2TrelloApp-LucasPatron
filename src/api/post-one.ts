import { STORE } from '../store';
import { TaskType } from '../types/task-type';
import { render } from '../utils/render-tasks';
import axios from 'axios';

export default async function httpPostOne(task: TaskType) {
  const request = await axios.post(process.env.API_ROOT, task);
  if (request.status === 200) {
    STORE.push(request.data.task);
    render();
  } else {
    console.error(request.statusText);
  }
}
