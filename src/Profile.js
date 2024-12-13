import React from "react";

const Profile = (props) => {
  return (
    <div>
      HI this is {props.nameProps}. {props.bio}
      <hr />
    </div>
  );
};

export default Profile;
