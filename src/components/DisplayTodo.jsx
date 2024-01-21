import { useState } from "react"
import { useTodo } from "../context"
import { TodoList } from "./index";

const DisplayTodo = () => {
  const {todos,updateTodo} =useTodo()


  return (
    <>
    {
      todos.map((todo)=>{
       return (
        <TodoList key={todo.id} {...todo}/>
       )
   
      })
    }
    </>
  )
}
export default DisplayTodo