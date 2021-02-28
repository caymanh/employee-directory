import React from "react";
import "./EmployeeTable.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

class EmployeeTable extends React.Component {
  state = {
    alphabetical: true,
    ascending: true,
    sortedEmployees: [],
    employees: [],
  };

  componentDidMount() {
    if (this.state.sortedEmployees.length < 1) {
      this.setState({
        sortedEmployees: this.props.empList,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.empList !== prevProps.empList) {
      this.setState({
        sortedEmployees: this.props.empList,
      });
    }
  }

  //Sort employees by age
  sortAge = () => {
    let sortEmp = [];
    if (this.state.ascending) {
      sortEmp = this.props.empList.sort((a, b) => {
        var nameA = a.dob.age,
          nameB = b.dob.age;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    } else {
      sortEmp = this.props.empList.sort((a, b) => {
        var nameA = a.dob.age,
          nameB = b.dob.age;
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    }
    this.setState({
      ascending: !this.state.ascending,
      sortedEmployees: sortEmp,
    });
  };

  render() {
    return (
      <div className="pt-5 container">
        <div className="row font-weight-bold border-top border-bottom py-3">
          <div className="col mx-auto">Image</div>
          <div className="col mx-auto text-center" onClick={this.sortName}>
            Name
          </div>

          <div className="col mx-auto text-center">Phone</div>
          <div className="col mx-auto text-center">E-mail</div>
          <div className="col mx-auto text-center" onClick={this.sortAge}>
            Age ⇵
          </div>
        </div>
        {this.state.sortedEmployees.length > 0 &&
          this.state.sortedEmployees.map((item, index) => (
            <EmployeeCard
              image={item.picture.large}
              first={item.name.first}
              last={item.name.last}
              phone={item.phone}
              email={item.email}
              age={item.dob.age}
            />
          ))}
      </div>
    );
  }
}

export default EmployeeTable;
