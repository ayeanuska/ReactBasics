import React from "react";

const Profile = (props) => {
  return (
    <div>
      HI this is {props.nameProps}. {props.bio}
    </div>
  );
};

export default Profile;
