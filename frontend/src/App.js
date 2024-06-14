import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import TaskDetail from './Components/TaskDetail';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const response = await axios.post('/api/tasks', task);
    setTasks([...tasks, response.data]);
  };

  const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`/api/tasks/${id}`, updatedTask);
    setTasks(tasks.map(task => (task._id === id ? response.data : task)));
    setIsEditing(false);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const selectTask = (task) => {
    setSelectedTask(task);
    setIsEditing(false);
  };

  const editTask = (task) => {
    setSelectedTask(task);
    setIsEditing(true);
  };

  const clearSelectedTask = () => {
    setSelectedTask(null);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '30px 0', fontSize: '50px', color: 'slateblue' }}>TASK MANAGER</h1>
      <TaskForm addTask={addTask} task={isEditing ? selectedTask : null} updateTask={updateTask} />
      {selectedTask && !isEditing && <TaskDetail task={selectedTask} clearSelectedTask={clearSelectedTask} />}
      <TaskList
        tasks={tasks}
        selectTask={selectTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
