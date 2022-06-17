import { connect } from "react-redux";
import PostList from "../../components/PostList";
import { getPost } from "../actions/actions";

const getMyState = (state) => {
  return state;
};

export const PostListContainer = connect(getMyState, { getPost })(PostList);
