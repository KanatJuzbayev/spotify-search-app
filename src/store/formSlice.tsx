import { createSlice } from '@reduxjs/toolkit';
import { FormData } from 'types';

interface formState {
  allFormData: Array<FormData>;
  submitIsEnable: boolean;
}

const initialState: formState = {
  allFormData: [],
  submitIsEnable: true,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.allFormData.push(action.payload);
    },
    setSubmitStatus(state, action) {
      state.submitIsEnable = action.payload;
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice;
