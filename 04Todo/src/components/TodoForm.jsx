import { useTodo } from "../context/TodoContext";
import { useState } from "react";

function TodoForm() {
  const [singleTodo, setSingleTodo] = useState("");

  const { addTodo } = useTodo();

  const add=(e)=>{
    console.log(singleTodo)
    e.preventDefault()
    if(!singleTodo){
return 
    } 
    addTodo({todo: singleTodo, completed: false})
    setSingleTodo("")
    // humne set kiya waapis single todo ki value as empty string cuz then aisa nai kiya toh new todo add nai kar payenge humesha woh first added todo ki value hi rahegi na single todo mei
  }

  return (
    <form className="flex" onSubmit={add}>
        {/* somehow yaha add function joh onSubmit pe call hora hai usme parameter e dene ki zarurat nahi pad rahi woh automatically event note hora hai */}
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={singleTodo}
        onChange={(e)=> setSingleTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
