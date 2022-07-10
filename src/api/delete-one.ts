import axios from 'axios';
import { STORE } from '../store';
import { render } from '../utils/render-tasks';

export default async function httpDeleteOne(id: number) {
  const request = await axios.delete(`${process.env.API_ROOT}/${id}`);

  if (request.status === 200) {
    STORE.splice(
      STORE.findIndex((task) => task.id === Number(id)),
      1,
    );
    render();
  } else {
    console.error(request.statusText);
  }
}
