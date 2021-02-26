import React from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
  return (
    <div className="container">
      <div className="row py-3">
        <div className="col">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="col  my-auto">{props.name}</div>
        <div className="col  my-auto">{props.phone}</div>
        <div className="col  my-auto">{props.email}</div>
        <div className="col  my-auto">{props.dob}</div>
      </div>
    </div>
  );
}

export default EmployeeCard;
