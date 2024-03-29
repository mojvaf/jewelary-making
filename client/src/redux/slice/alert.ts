import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as uuid from "uuid";

type itemType = {
  msg: string;
  alertType: string;
  id: string;
};

interface StateType {
  alert:itemType[]
}

const slice = createSlice({
  name: "Alert",
  initialState: {
    alert:[],
  } as StateType,
  reducers: {
    setAlert: (
      state: StateType,
      action: PayloadAction<{ msg: string; alertType: string }>
    ) => {
      //[...state,action.payload]
      const id = uuid.v4();
      state.alert.push({
      msg: action.payload.msg,
      alertType: action.payload.alertType,
        id: id,
       });
     setTimeout(() => {
        state.alert = state.alert.filter((item) => item.id !== id);
      }, 2000);
    },
    removeAlert: (state: StateType, action: PayloadAction<itemType["id"]>) => {
      state.alert = state.alert.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setAlert, removeAlert } = slice.actions;

export default slice.reducer;
