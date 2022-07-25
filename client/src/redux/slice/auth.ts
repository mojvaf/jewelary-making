import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/auth";
import axios from "axios";

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


      axios
        .post("/api/users", action.payload)
        .then((res) => {
          localStorage.setItem('token', res.data.token)
          state.token = res.data.token
          state.isAuthenticated = true
          state.loading = false
          state.user= action.payload
        })
        .catch((err) => console.log("there is an error"));
    },
  },
});

export const { register } = slice.actions;

export default slice.reducer;
