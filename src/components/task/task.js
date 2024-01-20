import { formatDistanceToNow } from "date-fns";
import "./task.css";

function Task({ description, status, createdAt }) {
  const isEdition = status === "editing";
  const timeAgo = createdAt ? formatDistanceToNow(new Date(createdAt)) : "";

  return (
    <div>
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>
          <span className='description'>{description}</span>
          <span className='created'>created {timeAgo} ago</span>
        </label>
        <button className='icon icon-edit'></button>
        <button className='icon icon-destroy'></button>
      </div>

      {isEdition && <input type='text' className='edit' value={description} />}
    </div>
  );
}

export default Task;
