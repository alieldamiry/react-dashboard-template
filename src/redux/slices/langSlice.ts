import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "en",
};


export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLang: (state) => {
      if (state.current === "en") {
        state.current = "ar";
      } else {
        state.current = "en";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLang } = langSlice.actions;

export default langSlice.reducer;
