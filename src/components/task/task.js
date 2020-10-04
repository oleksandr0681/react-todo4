import React from 'react';

// css
import './task.css';

const Task = () => {
  const taskTitle = 'Task';
  return (
    <div className="task">
      <div className="task__title">{taskTitle}</div>
      <input type="text" placeholder="What do you need to do?" className="task__input" />
    </div>
  );
}

// export default означает что экспортируем только одну сущность.
export default Task;
