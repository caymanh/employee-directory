import React from "react";
import "./EmployeeTable.css";

function EmployeeTable() {
  return (
    <div className="pt-5 container">
    <div className="row font-weight-bold border-top border-bottom py-3">
    <div className="col mx-auto">Image</div>
    <div className="col mx-auto">Name</div>
    <div className="col mx-auto">Phone</div>
    <div className="col mx-auto">Email</div>
    <div className="col mx-auto">DOB</div>
    </div>
    </div>
  );
}

export default EmployeeTable;
