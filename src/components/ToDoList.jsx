import React from "react";
import './App.css';
import { useState } from "react";
import { v4 as uuid} from "uuid";
const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");   
    const toDoInput=(e)=>{
        setInputValue(e.target.value)
    }
    const addToList=()=>{
        if(inputValue.trim()!=""){
        setTodos([...todos,{id:uuid(),inputValue,isCompleted:false}]);
        setInputValue("");
        }
    }
    const deleteTodo=(id)=>{
        const updatedTodo=todos.filter(todo=>todo.id!=id)
        setTodos(updatedTodo);
    }
    const ToDoChange=(id)=>{
        const updatedTodo=todos.map((todo)=>todo.id===id?{...todo,isCompleted:!todo.isCompleted }:todo)
        setTodos(updatedTodo);
    }
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do List</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6">
          <div className="input-group mb-3">
            <input
              value={inputValue}
              onChange={toDoInput}
              onKeyDown={e => { if (e.key === 'Enter') addToList(); }}
              placeholder="Enter today's todo"
              className="form-control"
            />
            <button className="btn btn-primary" onClick={addToList}>Add</button>
          </div>
          <div>
            {todos.length === 0 ? (
              <div className="text-muted mt-3 text-center">No todos yet. Add one!</div>
            ) : (
              todos.map((todo) => (
                <div key={todo.id} className="d-flex justify-content-between align-items-center my-2">
                  <label className="flex-grow-1">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => ToDoChange(todo.id)}
                    />
                    <span
                      className={
                        todo.isCompleted
                          ? "text-decoration-line-through me-2"
                          : "me-2"
                      }
                    >
                      {todo.inputValue}
                    </span>
                  </label>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;

