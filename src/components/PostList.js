import React, { useEffect } from "react";

const PostList = (props) => {
  console.log(props.posts[0]);
  useEffect(() => {
    renderHTML();
  }, [props.posts]);
  const renderHTML = () => {
    return props.posts.map((val) => {
      return (
        <div>
          <h3>{val.title}</h3>
          <h3>{val.body}</h3>
        </div>
      );
    });
  };
  return <div>{renderHTML()}</div>;
};

export default PostList;
