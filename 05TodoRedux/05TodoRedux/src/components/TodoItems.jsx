import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/Todo/todoSlice'





function TodoItems() {

    const dispatch=useDispatch()
const todoList= useSelector((state)=> state.todos)
  return (
  <>
  <div>
    {todoList.map((item)=> 
    
    <div  className='my-2 mx-5' key={item.id}> {item.text}  <button className='ml-10' onClick={()=>dispatch(removeTodo(item.id))}>delete</button></div>
    
    )}
  </div>
  </>
  )
}

export default TodoItems