import React from 'react'
import {useState} from 'react'
import Usetodo  from '../contexts/Todocontexts';
function TodoItem({todo}) {
    const[isTodoEditable,setIsTodoEditable]=useState(false);
    const[todoMsg,setTodoMsg]=useState(todo.todotext);
    const{edittodo,deletetodo,togglecomplete}=Usetodo();
    const toggleCompleted = (e) => {
    //    if(e) e.preventDefault();// Prevent default form submission if necessary
        togglecomplete(todo.id);
      };
    
      const editTodo = (e) => {
    //    if(e) e.preventDefault(); // Prevent default form submission if necessary
        edittodo(todo.id, { ...todo, todotext: todoMsg });
        setIsTodoEditable(false);
      };
    return (
        <>
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
            type="button"
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
            
                    if (isTodoEditable) {
                        editTodo(); // Pass event here only when needed
                    } else {
                        setIsTodoEditable(true);
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletetodo(todo.id)}
            >
                ❌
            </button>
        </div>
        </>
    );
}

export default TodoItem;