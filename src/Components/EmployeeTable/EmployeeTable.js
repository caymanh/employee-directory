import React from "react";
import "./EmployeeTable.css";

function EmployeeTable() {
  return (
    <div className="pt-5 container">
      <div className="row font-weight-bold border-top border-bottom py-3">
        <div className="col mx-auto">Image</div>
        <div className="col mx-auto text-center">Name</div>
        <div className="col mx-auto text-center">Phone</div>
        <div className="col mx-auto text-center">Email</div>
        <div className="col mx-auto text-center">DOB</div>
      </div>
    </div>
  );
}

export default EmployeeTable;
