# Task Board

Task Board is a simple task management app built with React.  
It allows users to create, move, edit, delete and persist tasks using LocalStorage.

## Features

- Create tasks in the To Do column
- Move tasks between To Do, Doing and Done
- Delete tasks
- Edit tasks by enabling column edit mode
- Save tasks automatically in LocalStorage
- Responsive layout
- Clean office-style UI

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- LocalStorage
- Git / GitHub

## Project Structure

```txt
src/
├── components/
│   ├── AddTask.jsx
│   ├── Column.jsx
│   └── TaskCard.jsx
├── data/
│   └── initialTasks.js
├── hooks/
│   └── useLocalStorage.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx