
import React, { useState, useRef, useEffect } from 'react';
import './CSS/Todos.css';
import { Todoitem } from './Todoitem';


let count = 0;
export const Todo = () => {

  const [todos, settodos] = useState([]);
  const inputRef = useRef(null);
  const add = () => {
    settodos([...todos, { no: count++, text: inputRef.current.value, display: "" }])
    inputRef.current.value = "";
    localStorage.setItem("todos_count",count)
  }
  useEffect(()=> {
    settodos(JSON.parse(localStorage.getItem("todos")))
    count=localStorage.getItem("todos_count");
  },[])
  useEffect(() => {
    setTimeout(()=>{
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    },100);
    }, [todos])

  return (
    <div className='todo'>
      <div className="todo-header">To-do-list</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add Task' className='todo-input' />
        <div onClick={() => { add() }} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return <Todoitem key={index} settodos={settodos} no={item.no} display={item.display} text={item.text} />
        })}
      </div>


    </div>
  )
}
