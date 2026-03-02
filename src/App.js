import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Modal from './components/Modal';
import Task from './components/Task';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  let [tasks, setTasks] = useState
    (
      [
        { text: "Полить цветы", done: false },
        { text: "Сходить в магазин", done: false },
        { text: "Помыть посуду", done: false },
        { text: "Покормить кота", done: false }
      ]
    );

  let addTask = text => {
    let newTask = [...tasks, { text }];
    setTasks(newTask);
  }

  let doneTask = index => {
    let newTask = [...tasks];
    newTask[index].done = !newTask[index].done;
    setTasks(newTask);
  }

  let deleteTask = index => {
    let newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* <Counter />
      <Modal /> */}

      <Form addTask={addTask} />

      {tasks.map((task, index) => (<Task key={index} task={task} doneTask={doneTask} index={index} deleteTask={deleteTask} />))}
    </div>
  );
}

export default App;
