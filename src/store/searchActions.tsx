import { fetchHandler } from 'API/api';
import { searchActions } from './searchSlice';
import { AppDispatch } from 'store';

export const fetchData = (value: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const searchData = await fetchHandler(value);
      dispatch(searchActions.setResponse(searchData));
    } catch (error) {
      console.log(error);
    }
  };
};
