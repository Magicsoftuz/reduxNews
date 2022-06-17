import React, { useEffect } from "react";

const UserList = (props) => {
  console.log(props);
  const a = props.users.length ? "none" : "block";
  const renderHTML = () => {
    if (!props.users.length) {
      return;
    }
    return props.users.map((val) => {
      console.log(val);
      return (
        <div style={{ border: "5px solid red" }}>
          <h1
            onClick={() => {
              props.selectAction(val.id);
              props.getPost();
            }}
          >
            {val.name}
          </h1>
          <h4>{val.email}</h4>
          <h4>{val.address.city}</h4>
        </div>
      );
    });
  };
  return (
    <div>
      <button
        style={{ display: a }}
        onClick={() => {
          props.getDataAction();
        }}
      >
        Start
      </button>
      {renderHTML()}
    </div>
  );
};

export default UserList;
