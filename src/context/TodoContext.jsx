  import { useContext,createContext, useState, useEffect } from "react";




  export const TodoContextCreator=createContext({
    todos:[
      {
        id:1,
        todo:'todoMessage',
        completes:false
      }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
  })



  export const TodoProvider=(({children})=>{

    const [todos,setTodos]=useState(JSON.parse(localStorage.getItem('todosList'))||[])

    // console.log(todos);


   useEffect(()=>{
  localStorage.setItem('todosList',JSON.stringify(todos))
  console.log(todos);
   },[todos])



    const addTodo=(todo)=>{
      if(!todo)return  
    let fakeId=Date.now()
      const add=[{id:fakeId,todo,completed:false},...todos]
 
      return setTodos(add)

    }

    const updateTodo=(id,todo)=>{
      setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
    }
    
    const deleteTodo=(id)=>{
      setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
    }

    const toggleCompleted=(id)=>{

      setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))

    }

    return (
      <TodoContextCreator.Provider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}>
        {children}
      </TodoContextCreator.Provider>
    )
  })



  export function useTodo(){
    return(
     useContext(TodoContextCreator)
    )
  }