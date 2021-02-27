import React from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
  return (
    <div className="container">
      <div className="row py-3 border-bottom">
        <div className="col my-auto mx-auto">
          <img alt={props.firstName} src={props.image} />
        </div>
        <div className="col text-center my-auto mx-auto">{props.firstName} {props.lastName}</div>
        <div className="col text-center my-auto mx-auto">{props.phone}</div>
        <div className="col text-center my-auto mx-auto">{props.email}</div>
        <div className="col text-center my-auto mx-auto">{props.dob}</div>
      </div>
    </div>
  );
}

export default EmployeeCard;
