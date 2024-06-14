import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Task = ({ task, selectTask, deleteTask, editTask }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`task ${isChecked ? "completed" : ""}`}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{ width: "20px", height: "20px", margin: "10px" }}
        />
        <span
          onClick={() => selectTask(task)}
          style={{
            textDecoration: isChecked ? "line-through" : "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {task.title}
        </span>
      </div>
      <div>
        <button className="edit-button" onClick={() => editTask(task)}>
          <FaEdit style={{ fontSize: "20px" }} />
        </button>
        <button className="delete-button" onClick={() => deleteTask(task._id)}>
          <FaTrash style={{ fontSize: "20px" }} />
        </button>
      </div>
    </div>
  );
};

export default Task;
