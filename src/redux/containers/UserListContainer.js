import { connect } from "react-redux";
import { getDataAction, selectAction, getPost } from "../actions/actions";
import UserList from "../../components/UserList";

const getMyState = (state) => {
  return state;
};

const UserListContainer = connect(getMyState, {
  getDataAction,
  selectAction,
  getPost,
})(UserList);
export default UserListContainer;
