import "./footer.css";
import TasksFilter from "../tasks-filter";

function Footer() {
  return (
    <footer className='footer'>
      <span className='todo-count'>1 items left</span>
      <TasksFilter />
      <button class='clear-completed'>Clear completed</button>
    </footer>
  );
}
export default Footer;
