import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, task, updateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(formatDateForInput(task.dueDate));
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      updateTask(task._id, { title, description, dueDate });
    } else {
      addTask({ title, description, dueDate });
    }
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <form
      id="task-form"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: '100%' }}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ flex: '1', marginRight: '10px', height: '30px' }}
        />
        <span style={{ marginRight: '10px' }}>Due Date:</span>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          style={{ flex: '1', height: '30px' }}
        />
      </div>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ width: '100%', height: '30px'}}
      />
      <button type="submit">
        {task ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
