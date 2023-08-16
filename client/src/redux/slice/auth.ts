import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateType = {
  token: string;
  isAuthenticated: boolean;
};
/** */
const slice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: !!localStorage.getItem("token"),
  } as stateType,
  reducers: {
    login: (state: stateType, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      state.isAuthenticated = true;
    },
    logout: (state: stateType) => {
      state.token = "";
      localStorage.removeItem("token");
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = slice.actions;

export default slice.reducer;
