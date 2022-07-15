import { httpGetAll } from "../api/get/get-all";
import { Task } from "../types/task-type";
import { render } from "../utils/render-tasks";

export const STORE: Task[] = [];

export default async function initializeStore(): Promise<void> {
  const tasks = await httpGetAll();
  if (tasks) {
    STORE.push(...tasks);
  }
  render();
}
