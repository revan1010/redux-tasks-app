import { ADD_TASK, DEL_TASK, DONE_TASK } from "./actionTypes";
// Define action creator functions

// Action creator for adding a task
export const addTask = (data) => ({
  type: ADD_TASK,
  payload: data,
});
// Action creator for deleting a task
export const deleteTask = (id) => ({
  type: DEL_TASK,
  payload: id,
});
// Action creator for marking a task as done
export const doneTask = (id) => ({
  type: DONE_TASK,
  payload: id,
});
