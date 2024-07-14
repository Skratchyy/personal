import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: "EN" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export default languageSlice.reducer;
export const languageActions = languageSlice.actions;
