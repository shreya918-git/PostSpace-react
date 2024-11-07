import React,{useState,useEffect} from 'react'
import './App.css'
import { Todocontextprovider } from './contexts/Todocontexts'
import TodoForm from './components/Todoform'
import TodoItem from './components/Todoitems'

function App() {
  const [Todos,settodo]=useState([])
  const addTodo=(todos)=>{
    settodo((prev)=>[{id:Math.random(),...todos},...prev])
  }
  const edittodo=(id,todos)=>{
    settodo(prev=>(
     prev.map(previtem=>
      previtem.id===id? todos:previtem   //this would replace the whole object
     )
    ))
  }
  const deletetodo=(id)=>{
  settodo(prev=>prev.filter(todo=>todo.id!==id))
  }
  const togglecomplete=(id)=>{
    settodo(prev=>
      prev.map(previtem=> previtem.id==id?{ ...previtem, completed: !(previtem.completed) }:previtem)
    )
  }
  // useEffect(()=>{
  //  const Todo= JSON.parse(localStorage.getItem("todo")); 
  //   if(Todo&&Todo.length>0)
  //     settodo(Todo)
  // },[])
  // useEffect(()=>{
  //   localStorage.setItem("todo",JSON.stringify(Todos))
  // },[Todos])
//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem("todo")) || []; // Use a default empty array if null
//     if (storedTodos.length > 0) {
//        settodo(storedTodos);
//     }
//  }, []);
// useEffect(() => {
//   try {
//       const storedTodos = JSON.parse(localStorage.getItem("todo")) || []; // Fallback to empty array if parsing fails
//       if (Array.isArray(storedTodos)) {
//           settodo(storedTodos);
//       }
//   } catch (error) {
//       console.error("Error parsing todos from local storage", error);
//       settodo([]); // Set to an empty array on parse error
//   }
// }, []);
useEffect(() => {
  const Todo = JSON.parse(localStorage.getItem("todo"));
  if (Todo && Todo.length > 0) {
    // Ensure 'completed' is a boolean
    const updatedTodos = Todo.map(item => ({
      ...item,
      completed: item.completed === "true" || item.completed === true
    }));
    settodo(updatedTodos);
  }
}, []);

 useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(Todos));
 }, [Todos]);
 
  return (
    <Todocontextprovider value={{Todos,addTodo, edittodo, deletetodo,togglecomplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {Todos.map(todo=>(
                          <div key={todo.id} className='w-full'>
                          <TodoItem todo={todo}/>
                          </div>))}
                    </div>
                </div>
            </div>
    </Todocontextprovider>
  )
}

export default App
