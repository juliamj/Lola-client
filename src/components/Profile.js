import React from "react";

const Profile = () => {
    
  return (
    <div classname="Profile">
      This is what a profile looks like. This can be the user themself, or
      another user.
      <div aria-label="Profile information of user">
        <ul>
          <li>Name: </li>
          <li>Gender: </li>
          <li>Location: </li>
          <li>Birthday: </li>
          <li>Native Languages: </li>
          <li>Other Languages: </li>
          <li>Languages Learning: </li>
          <li>Interests: </li>
          <li>About Text: </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
