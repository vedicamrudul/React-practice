import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos: [{id: 1, text: "This is an example of todo"}]
}

const todoSlice=createSlice(
    {
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo={
                id: nanoid(),
                text: action.payload
            }
            if(todo.text){
            state.todos.push(todo)}

    
        },
        removeTodo: (state, action)=>{
            state.todos= state.todos.filter((item)=> item.id != action.payload ) 
        }
    }
})

export const {addTodo, removeTodo}=todoSlice.actions
export default todoSlice.reducer