import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stateType {
  count: number;
}

const slice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  } as stateType,
  reducers: {
    inCounter: (state: stateType, action: PayloadAction<void>) => {
      state.count++;
    },
    decrease: (state: stateType, action: PayloadAction<void>) => {
      state.count--;
    },
    setCounterValue: (state: stateType, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { decrease, inCounter, setCounterValue } = slice.actions;

export default slice.reducer;
