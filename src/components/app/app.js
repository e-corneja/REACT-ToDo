import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import Footer from "../footer";

import "./app.css";

function App() {
  const todoData = [
    {
      description: "Completed task",
      status: "completed",
      id: 1,
      createdAt: new Date(),
    },
    { description: "Editing task", status: "editing", id: 2 },
    { description: "Active task", id: 3, createdAt: new Date() },
  ];

  return (
    <div className='todoapp'>
      <NewTaskForm />
      <TaskList todos={todoData} />
      <Footer />
    </div>
  );
}

export default App;
