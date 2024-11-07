import React,{useContext} from 'react'
export const Todocontext=React.createContext({
    Todos:[],
    addTodo:(todotext)=>{},
    edittodo:(id,todotext)=>{},
    deletetodo:(id)=>{},
    togglecomplete:(id)=>{}
})
const Usetodo=()=>(useContext(Todocontext))
export const Todocontextprovider = Todocontext.Provider;
export default Usetodo