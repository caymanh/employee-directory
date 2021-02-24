import React from "react";
import "./EmployeeTable.css";

function EmployeeTable() {
  return (
    <div className="pt-5 container">
    <div className="row font-weight-bold border-top border-bottom py-3">
    <div className="col">Image</div>
    <div className="col">Name</div>
    <div className="col">Phone</div>
    <div className="col">Email</div>
    <div className="col">DOB</div>
    </div>
    </div>
  );
}

export default EmployeeTable;
