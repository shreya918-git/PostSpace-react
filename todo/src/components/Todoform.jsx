import React,{useState} from 'react'
import  Usetodo  from '../contexts/Todocontexts';
function TodoForm() {
    const[text,settext]=useState("");
    const {addTodo}=Usetodo();
const submit=(e)=>{
    e.preventDefault();
    addTodo({todotext:text,completed:false});
    settext("")
}
    return (
        <form  className="flex" onSubmit={submit}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={text}
                onChange={(e)=>settext(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

