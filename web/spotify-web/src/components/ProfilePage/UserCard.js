import React from "react";

const UserCard = props => {
    return (
      <div key={props.id}>
        <p>Welcome {props.username}</p>
      </div>
    );
  };

  export default UserCard;