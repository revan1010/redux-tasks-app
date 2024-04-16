import "./App.css";

import TaskInput from "./components/TaskInput/TaskInput";
import { TaskList } from "./components/TaskList/TaskList";

function App() {
  return (
    <>
      <div className="app">
        <div className="title-part">
          <h1>Tasks - TO DO!</h1>
        </div>
        <div className="task-Input">
          <TaskInput />
        </div>
        <div className="task-list">
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
