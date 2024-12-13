import React from "react";

const Profile = ({ nameProps, bio }) => {
  //   const{ nameProps, bio } = props;
  return (
    <div>
      {/* HI this is {props.nameProps}. {props.bio} */}
      HI this is {nameProps} and {bio}
      <hr />
    </div>
  );
};

export default Profile;

// destructuring helps to reduce code (line of code : devlopment is accelerated)
