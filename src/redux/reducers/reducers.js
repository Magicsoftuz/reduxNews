import { GET_DATA, GET_POST, SELECT } from "../actions/actions";

export const initialState = { users: [], id: null, posts: [] };

export const reducers = (state = initialState, action) => {
  if (action.type === GET_DATA) {
    return {
      users: [...state.users, action.payload],
      id: state.id,
      posts: [...state.posts],
    };
  } else if (action.type === SELECT) {
    return {
      users: [...state.users],
      id: action.payload,
      posts: [...state.posts],
    };
  } else if (action.type === GET_POST) {
    return {
      users: [...state.users],
      id: state.id,
      posts: action.payload,
    };
  }
  return state;
};
