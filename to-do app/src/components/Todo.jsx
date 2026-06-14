import {useState, useRef, useEffect} from 'react'
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import TodoItem from "./TodoItem";

const Todo = () => {
const [todos, setTodos] = useState([]);
const data = useRef();

const addTodos = () => {
  const inputText = data.current.value.trim();

  if (inputText === "") {
    return null;
  }

  const newTodo = {
    id: todos.length + 1,
    text: inputText,
    isComplete: false,
  };

  setTodos((prev) => [...prev, newTodo]);
  data.current.value = "";
};

const toggle = (id) => {
  setTodos((prevTodos) => {
    return prevTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
  });
};

const deleteTodo = (id) => {
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
}


useEffect(() => {
console.log(todos);
}, [todos])


return (
<div className="place-self-center bg-[#432121] w-100 h-200 p-12 flex flex-col gap-5 rounded-lg">
  
      <h1 className="text-3xl flex flex-col gap-2"><MdPlaylistAddCheckCircle/>Todo App  </h1>

    <div className="flex items-center bg-slate-600 p-1 cursor-pointer rounded-full">
      <input onKeyDown={(e) => { if(e.key === "Enter") addTodos() }}
      ref={data}
      type="text" className="border-none outline-none p-1 flex-1 bg-transparent placeholder:text-slate-500" placeholder="Yeni bir içerik ekle" />
      <div className="bg-[#4B5694] h-full w-14 flex items-center justify-center rounded-r-full" onClick={()=> addTodos()}>
      <TiPlus className="size-8 text-[#0D530E]" />
      </div>
    </div>

  <div className="mt-5">
      {
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggle={toggle} deleteTodo={deleteTodo}  />
          ))}


  </div>

    </div>
)
    

  
}

export default Todo
