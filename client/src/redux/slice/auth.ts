import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/auth";
import axios from "axios";
import {setAlert} from './alert'
type stateType = {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  user: any;
};

const slice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    user: null,
  } as stateType,
  reducers: {
    register: (state: stateType, action: PayloadAction<User>) => {
      /*const config = {
        headers:{
          'Content-Type':'application/json'
        }
      }
    const body = Json.stringify({name,email,password})
   */
      axios
        .post("/api/users", action.payload /*body, config*/)
        .then((res) => {
          localStorage.setItem('token', res.data.token)
          state.token = res.data.token
          state.isAuthenticated = true
          state.loading = false
          state.user= action.payload
        })
        .catch((err) =>{
          const errors = err.response.data.errors
          if(errors){
           /*errors.forEach(error=> dispatch(setAlert(error.msg, 'danger'))))*/
          }
        });
    },
  }
});

export const { register } = slice.actions;

export default slice.reducer;
