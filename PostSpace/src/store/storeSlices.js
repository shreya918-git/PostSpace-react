import { createSlice } from "@reduxjs/toolkit";    //redux store helps us to know to the current state of user whether loggedin or loggedout
const intialstate={
    status:false,
    userdata:""
}
const Storeslicer=createSlice({
    name:"auth",
    intialstate,
    reducers:
    {
        login:(state,action)=>{
            state.status=true,
            state.userdata=action.payload
        },
        logout:(state)=>{
            state.status=false,
            state.userdata=""
        }
    }
})
export {login,logout} from Storeslicer.actions
export const Reducers=Storeslicer.reducer