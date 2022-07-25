import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as uuid from "uuid";


export type ItemType = {
   title: string,
   id:string
}

interface StateType  {
    itemList: ItemType[];
    inputText: string;
    id: ItemType['id'] | undefined
}

const slice = createSlice({
    name:"items",
    initialState:{
        itemList:[],
        inputText: '',
        id: undefined
    } as StateType,
    reducers: {
      handleEditItem: (state:StateType, action:PayloadAction<ItemType>)=>{
        state.inputText = action.payload.title
        state.id = action.payload.id
      }, 
     setInputText:  (state:StateType, action:PayloadAction<string>)=>{
        state.inputText = action.payload
     },
     editItem: (state:StateType, action:PayloadAction<string>)=>{
        if(state.id){
            const foundItem = state.itemList.find(item=> item.id === state.id)
           if(foundItem){
            foundItem.title = state.inputText
            state.id = undefined
           }
        }else{
            state.itemList.push({title: action.payload,  id: uuid.v4(), })
        }
        
     },
     deleteItem:(state:StateType, action:PayloadAction<ItemType['id']>)=>{
        state.itemList = state.itemList.filter(item=> item.id !== action.payload)
     }  
    }
})

export default slice.reducer;

export const {editItem, deleteItem, handleEditItem, setInputText} = slice.actions;