import React from "react";
import UserListContainer from "../redux/containers/UserListContainer";
import PostList from "./PostList";
import UserList from "./UserList";
import "./style.css";
import { PostListContainer } from "../redux/containers/PostListContainer";

const App = () => {
  return (
    <div className="container">
      <PostListContainer />
      <UserListContainer />
    </div>
  );
};

export default App;
