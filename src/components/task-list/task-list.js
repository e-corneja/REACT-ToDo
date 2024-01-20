import "./task-list.css";
import Task from "../task";

function TaskList({ todos }) {
  const elements = todos.map((item) => {
    const { id, status = "", ...itemProps } = item;

    return (
      <li key={id} className={status}>
        <Task {...itemProps} status={status} />
      </li>
    );
  });

  return <ul className='todo-list'>{elements}</ul>;
}

export default TaskList;
