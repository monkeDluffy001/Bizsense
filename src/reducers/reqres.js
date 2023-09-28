import { createSlice } from '@reduxjs/toolkit';

export const reqres = createSlice({
  name: 'reqres',
  initialState: {
    loading: false,
    list: []
  },
  reducers: {
    getListRequest: (state) => {
      state.loading = true;
    },
    getListSuccess: (state, action) => {
      console.log('action', action);
      state.loading = false;
      state.list = action.payload;
    },
    getListFailure: (state) => {
      state.loading = false;
      state.list = [];
    }
  }
});

export const { getListRequest, getListSuccess, getListFailure } = reqres.actions;

export default reqres.reducer;
