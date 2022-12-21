import { createSlice } from '@reduxjs/toolkit';
import { Data } from 'types';

interface searchState {
  searchTerm: string;
  status: string;
  response: Data | null;
}

const initialState: searchState = {
  searchTerm: '',
  status: '',
  response: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setResponse(state, action) {
      state.response = action.payload;
    },
    resetResponse(state) {
      state.response = null;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
