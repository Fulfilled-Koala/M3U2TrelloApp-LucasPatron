import axios from 'axios';
import { STORE } from '../store';
import showErrorToast from '../toasts/error';
import showSuccessToast from '../toasts/success';
import { render } from '../utils/render-tasks';

export default async function httpDeleteOne(id: number) {
  const request = await axios.delete(`${process.env.API_ROOT}/${id}`);

  if (request.status === 200) {
    STORE.splice(
      STORE.findIndex((task) => task.id === Number(id)),
      1,
    );
    render();
    showSuccessToast('Successfully deleted task');
  } else {
    console.error(request.statusText);
    showErrorToast('Failed to delete task');
  }
}
