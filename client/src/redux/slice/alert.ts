import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from 'uuid'

type itemType={
    msg:string,
    alertType:string
    id:string 
}

interface StateType  {
    
    alert:itemType[] 
}


const slice = createSlice({
    name:'Alert',
   initialState:{
    alert:[]
   } as StateType,
   reducers: {
    setAlert:(state:StateType,action:PayloadAction)=>{
        //return [...state.alert, state.payload]
       console.log('success')
    },
    removeAlert: (state:StateType,action:PayloadAction<void>)=>{
        //state.alert.filter(alert=> alert.id !== action.payload)
        console.log('removed')
    }
   }
})


export const { setAlert } = slice.actions;

export default slice.reducer;