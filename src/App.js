import "./App.css";
import Todoform from "./Todoform";
import Todos from "./Todos";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: false },
    { id: 2, title: "Learn React", completed: true },
    { id: 3, title: "Find Good watlz in Am", completed: false },
  ]);
  function addtodo(newtodo) {
    setTodos([...todos, newtodo]);
  }

  function toggleCompleted(id) {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }

  function removeTodo(id){
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }
  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title">Todo List</h1>
      <Todoform addtodo={addtodo} />
      <Todos
        todos={todos}
        addtodo={addtodo}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
