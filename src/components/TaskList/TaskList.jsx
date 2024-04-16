import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, doneTask } from "../../redux/actions"; // Importing action creators for deleting and marking tasks as done
import "./TaskList.css";
import { Button, IconButton } from "@mui/material";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
export const TaskList = () => {
  const task = useSelector((state) => state.task.tasks); // Accessing tasks from Redux store state
  const dispatch = useDispatch(); // Initializing useDispatch hook to dispatch actions

  const handleDelete = (id) => {
    dispatch(deleteTask(id)); // Dispatching action to delete task with specified id
  };
  console.log(task);
  const handleDone = (id) => {
    dispatch(doneTask(id)); // Dispatching action to mark task with specified id
  };

  return (
    <div>
      {task.length == 0 ? (
        <div>No tasks! </div>
      ) : (
        <div className="task-list">
          {task.map((taskItem) => {
            return (
              <div
                key={taskItem.id}
                className={"task-item " + (taskItem.isDone ? "red" : "green")} // Applying CSS class based on task's 'isDone' status
              >
                <p className={"task-p " + (taskItem.isDone ? "red-p" : "")}>
                  {taskItem.task}
                </p>

                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => handleDone(taskItem.id)}
                >
                  <CheckCircleTwoToneIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => handleDelete(taskItem.id)}
                >
                  <HighlightOffTwoToneIcon />
                </IconButton>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
