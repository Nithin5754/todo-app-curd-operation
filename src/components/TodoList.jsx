import { useEffect, useState } from "react"
import { useTodo } from "../context"

const TodoList = ({id,todo,completed}) => {
  const {updateTodo,deleteTodo,toggleCompleted} =useTodo()
  const [isEditable,setEditable]=useState(false)
  const [isChecked,setChecked]=useState(false)
  const [edit,setEdit]=useState(todo)

const handleEdit=()=>{
  setEditable(!isEditable)
  if(isEditable){
    updateTodo(id,{id:id,todo:edit,completed:completed})
  }
}

const handleRemove=()=>{
  deleteTodo(id)
    
}
const handleToggle=()=>{
  setChecked(!isChecked)
  toggleCompleted(id)
}


  return (
    <div key={id} className="flex space-x-4 w-8/12 m-auto gap-4 my-4 bg-slate-400 p-2 rounded-md">
      <input type="checkbox" checked={isChecked===true} onChange={handleToggle}/>
       <input 
           type="text" 
           value={edit} 
          readOnly={isEditable?false:true}
          onChange={(e)=>setEdit(e.target.value)}
        
           className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-transparent bg-gray-50-50 ${isEditable?'bg-red-100':''} ${completed===true?'line-through':''}` }
       />
       <button 
           className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
           onClick={handleEdit}
       >
           {completed===true&&isEditable?'submit':'edit'}
       </button>
       <button 
           className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
           onClick={handleRemove}
       >
           Remove
       </button>
   </div>
  )
}
export default TodoList