import { Input, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import "./TaskInput.css";

import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/actions";
const TaskInput = () => {
  const dispatch = useDispatch(); // Get Redux dispatch function

  const [newTask, setNewTask] = useState(""); // State variable to store new task input

  const handleChange = (e) => {
    setNewTask(e.target.value); // Update newTask state with input value
  };
  const handleAddTask = () => {
    if (newTask === "") {
      return;
    }
    const newTaskObj = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID for the task
      task: newTask, // Use the input value here
      isDone: false, // Initialize isDone property to false
    };

    // Dispatch addTask action with new task object as payload
    dispatch(addTask(newTaskObj));

    // Clear the input field after adding the task
    setNewTask("");
  };
  return (
    <div className="Task-Input-Container">
      <TextField
        id="demo-helper-text-aligned"
        label="Add Task"
        sx={{ flex: "1" }}
        onChange={handleChange} // Call handleChange function on input change
        value={newTask}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "green", height: "50px", fontSize: "20px" }}
        onClick={handleAddTask} // Call handleAddTask function on button click
      >
        Add
      </Button>
    </div>
  );
};

export default TaskInput;
