import axios from 'axios';
import showErrorToast from '../toasts/error';
import showSuccessToast from '../toasts/success';

export async function httpDeleteAll() {
  const response = await axios.delete(process.env.API_ROOT);
  if (response.status === 200) {
    showSuccessToast('Successfully deleted all tasks');
  } else {
    showErrorToast('Failed to delete all tasks');
    console.error(response.statusText);
  }
}
