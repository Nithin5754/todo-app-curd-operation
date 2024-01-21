import { useState } from "react"
import { useTodo } from "../context/index"

const TodoForm = () => {


 const [todo,setTodo]=useState('')

 const{addTodo}=useTodo()

 const handleSubmit=(e)=>{
  e.preventDefault();

  addTodo(todo)
  setTodo('')
  
    
  return true


 }

  return (
 <div className="w-6/12 m-auto my-12">
 <form className="space-y-4">
 <div className="flex space-x-3">
    <input 
      type="text" 
      value={todo} 
      onChange={(e) => setTodo(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <button 
      onClick={handleSubmit}
      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
    >
      Add
    </button>
 </div>
</form>


 </div>
  )
}
export default TodoForm