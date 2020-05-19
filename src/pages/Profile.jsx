import React from "react";
import Reservations from "../components/Reservations"
const Profile = (props) => {
  return (
    <div>
      <h1>Protected profile</h1>
      <Reservations />
    </div>
  );
};

export default Profile;
