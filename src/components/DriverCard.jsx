import React from "react";

const DriverCard = props => {
  return (
    <div className="DriverCard">
      <p>First name : {props.driver.firstname}</p>
      <p>Last name : {props.driver.lastname}</p>
      <p>Username : {props.driver.firstname}</p>
      <p>Gender : {props.driver.gender}</p>
      <img className="photo" src={props.driver.photo} alt={props.driver.name} />
    </div>
  );
};

export default DriverCard;
