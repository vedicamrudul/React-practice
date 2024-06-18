import { useEffect } from "react";
import { useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // console.log(`${todo} this is todo`)
    setTodos((prevArray) => [{ id: Date.now(), ...todo }, ...prevArray]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prevArray) => 
      prevArray.map((currTodo) => (currTodo.id === id ? newTodo : currTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevArray) => prevArray.filter((currTodo) => currTodo.id != id));
  };

  const toggleComplete = (id) => {
    setTodos((prevArray) =>
      prevArray.map((currTodo) =>
        currTodo.id === id
          ? { ...currTodo, completed: !currTodo.completed }
          : currTodo
      )
    );
    // for the true condition, we over wrote the value of completed.
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todosStored"));
    // we first get the item and then set the item. Local storage stores everything in the form of string so we use JSON.parse to convert things into js format from JSON format. Basically JSON is striing and we convert JSON into our normal javascript code using this to get item.
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todosStored", JSON.stringify(todos));
    // we set item called "todosStored" which is the key and we store the array of objects 'todos' that we defined in the todoContext here.
  }, [todos]);
  // as soon as we make any changes in todos we want those changes to be reflected in the local storage as well

  return (
    <>
      <TodoProvider
        value={{ addTodo, updateTodo, toggleComplete, deleteTodo, todos }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full bg-[#2f4360] max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl  font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((item) => (
                <div className="w-full" key={item.id}>
                  <TodoItem todo={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
