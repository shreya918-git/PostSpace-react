import {configureStore} from '@reduxjs/toolkit'
import {Reducers}  from '../features/todo/todoSlice'; 
export const Storeconfigure=configureStore({
    reducer:Reducers
});