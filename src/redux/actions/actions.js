import getData from "../../components/Api";
export const GET_DATA = "GET_DATA";
export const SELECT = "SELECT";
export const GET_POST = "GET_POST";

export const getDataAction = () => async (dispatch, getState) => {
  const users = await getData("users");
  dispatch({
    type: GET_DATA,
    payload: users.data,
  });
};

export const selectAction = (id) => {
  return {
    type: SELECT,
    payload: id,
  };
};

export const getPost = () => async (dispatch, getState) => {
  const posts = await getData(`posts?userId=1`);
  const obj = { type: GET_POST, payload: posts.data };
  dispatch(obj);
};
