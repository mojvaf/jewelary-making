import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const uuidv4=()=> {
    // @ts-ignore
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

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
            state.itemList.push({title: action.payload, id:uuidv4() })
        }
        
     },
     deleteItem:(state:StateType, action:PayloadAction<ItemType['id']>)=>{
        state.itemList = state.itemList.filter(item=> item.id !== action.payload)
     }  
    }
})

export default slice.reducer;

export const {editItem, deleteItem, handleEditItem, setInputText} = slice.actions;