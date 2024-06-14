import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, selectTask, deleteTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          selectTask={selectTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
