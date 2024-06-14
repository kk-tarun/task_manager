### README.md

# Task Management Application

This is a simple Task Management Application that allows users to create, read, update, and delete tasks. This project demonstrates proficiency in both front-end and back-end development skills using the MERN (MongoDB, Express, React, Node.js) stack.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed
- MongoDB instance running (local or cloud)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. Set Up the Backend

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI and server port:
   ```plaintext
   MONGO_URI=<Your MongoDB URI>
   PORT=5000
   ```

4. Start the backend server:
   ```sh
   npm run server
   ```

### 3. Set Up the Frontend

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

### 4. Running Both Servers Concurrently

For convenience, you can run both the backend and frontend servers concurrently from the root directory using the following command:
```sh
npm install
npm run dev
```

### Folder Structure

```
task-manager/
│
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── app.js
│   └── config/
│       └── db.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Task.js
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskList.js
│   │   │   ├── TaskDetail.js
│   │   │   └── TaskEdit.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│
├── package.json
└── README.md
```

### Features

- **Landing Page**: Displays a list of tasks.
- **Add New Task**: Users can add tasks with a title, description, and due date.
- **View Task**: Users can view detailed information about each task.
- **Edit Task**: Users can edit existing tasks.
- **Delete Task**: Users can delete tasks.

### Technologies Used

- **Front-end**: React, Axios
- **Back-end**: Node.js, Express, MongoDB, Mongoose
- **Environment Variables**: `dotenv`

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgements

- Thanks to the open-source community for providing great tools and resources.

### Screenshots
- Landing Page
  ![Screenshot 2024-06-14 154544](https://github.com/kk-tarun/task_manager/assets/74929799/f1d7de51-de5d-4d2f-81f4-1d2b787fd9f1)
- View Task
  ![Screenshot 2024-06-14 154633](https://github.com/kk-tarun/task_manager/assets/74929799/7a4adedb-72b7-4772-bad0-dec618cc0411)
- Update Task
  ![Screenshot 2024-06-14 154655](https://github.com/kk-tarun/task_manager/assets/74929799/3d750c2f-7fce-4365-b43a-c31564067227)

