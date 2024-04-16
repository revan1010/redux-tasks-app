import { ADD_TASK, DEL_TASK, DONE_TASK } from "./actionTypes";

// Define the initial state for tasks
const initialState = {
  tasks: [],
};
// Define the taskReducer to handle actions related to tasks
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload], // Add the new task to the tasks array
      };
    case DEL_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload), // Filter out the task with the specified ID
      };
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ), // Toggle the isDone property of the task with the specified ID
      };
    default:
      return state;
  }
};

export default taskReducer;
