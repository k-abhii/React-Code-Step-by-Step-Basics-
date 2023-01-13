import React from "react";

function User(props) {
  console.warn(props.data.name);
  const { data } = props;
  return (
    <div>
      <h1>User Component</h1>
      <h2>{data.name}</h2>
      <h4> age : {data.age}</h4>
    </div>
  );
}

export default User;
