import axios from 'axios';
import * as reqres from 'reducers/reqres';

export function getList() {
  return async (dispatch) => {
    dispatch(reqres.getListRequest());

    try {
      const response = await axios.get(`/api/users?page=1`);
      dispatch(reqres.getListSuccess(response.data.data));
    } catch (error) {
      dispatch(reqres.getListFailure());
    }
  };
}
