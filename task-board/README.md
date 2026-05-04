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

## How to run the project
In terminal run:
npm install
npm run dev


## What I learned
React component structure
Props and state management
Updating arrays immutably
Conditional rendering
Custom hooks
LocalStorage persistence
Basic responsive design
Git and GitHub workflow

## Future improvements
Drag and drop support
Task priority labels
Due dates
Search and filters
Dark mode

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
