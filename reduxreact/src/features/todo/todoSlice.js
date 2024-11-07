import {createSlice,nanoid} from '@reduxjs/toolkit'
const initialState = {
    todos: [{ id: 1, text: "" }]
};

const Slice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload // Access payload directly
            };
            state.todos.push(todo);
        }
        ,
        deletetodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!=action.payload)
        }
    }
})
export const {addtodo,deletetodo}=Slice.actions

export const Reducers=Slice.reducer