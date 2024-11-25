import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  isReduxEmpty: true,
  isItHeartAttack: {},

};

export const QuestionSlice = createSlice({

  name: "QuestionSlice",
  initialState,
  reducers: {

    setIsItHeartAttack: (state, action) => {
      state.isItHeartAttack = action.payload;
    },

    setIsReduxEmpty: (state, action) => {

      state.isReduxEmpty = action.payload;

    }


  },
});

export const { setIsReduxEmpty, setIsItHeartAttack } = QuestionSlice.actions;

export default QuestionSlice.reducer;










