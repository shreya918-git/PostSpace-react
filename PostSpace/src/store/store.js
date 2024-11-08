import {configureStore} from '@reduxjs/toolkit'
import  Reducers  from './storeSlices'
export const Store=configureStore({
    reducer:Reducers
})