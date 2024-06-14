import React from "react";

const TaskDetail = ({ task, clearSelectedTask }) => {
  if (!task)
    return (
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        Select a task to view details
      </div>
    );

  return (
    <div
      style={{
        marginBottom: "20px",
        backgroundColor: "antiquewhite",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <button
        onClick={clearSelectedTask}
        style={{
          position: "relative",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          float: "right",
        }}
      >
        &times;
      </button>
      <p>
        <span className="task_title">Title: </span>
        {task.title}
      </p>
      <p>
        <span className="task_title">Descripation: </span>
        {task.description}
      </p>
      <p>
        <span className="task_title">Due Date: </span>
        {new Date(task.dueDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default TaskDetail;
