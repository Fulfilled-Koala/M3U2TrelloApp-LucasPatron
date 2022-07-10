import { STORE } from '../store';
import axios from 'axios';

export default async function httpPatchStatus(
  id: number,
  status: 'backlog' | 'work-in-progress' | 'in-review' | 'finished',
) {
  if (!['backlog', 'work-in-progress', 'in-review', 'finished'].includes(status)) return;
  if (isNaN(id)) return;

  const request = await axios.patch(`${process.env.API_ROOT}/status/${id}`, { status });
  if (request.status === 200) {
    const { id, status } = request.data.task;

    for (const task of STORE) {
      if (task.id === id) {
        task.status = status;
      }
    }
  } else {
    console.error(request.statusText);
  }
}
