import React from "react";
import "./Search.css";
import EmployeeTable from "../EmployeeTable/EmployeeTable";

class Search extends React.Component {
  state = {
    searchTerm: "",
    filteredEmployees: [],
  };

  componentDidMount() {
    if (this.state.filteredEmployees.length < 1) {
      this.setState({
        filteredEmployees: this.props.employees,
      });
    }
  }
  //Filter employees by name
  handleInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
    let userTyped = event.target.value;
    const filteredList = this.props.employees.filter((item) => {
      let values =
        item.name.first +
        item.name.last +
        item.dob.date.substring(0, 10) +
        item.email +
        item.phone;
      return values.indexOf(userTyped) !== -1;
    });

    this.setState({
      filteredEmployees: filteredList,
    });
  };

  render() {
    return (
      <div className="search pt-5">
        <form>
          <input
            value={this.state.searchTerm}
            className="col-1 justify-content-center py-1"
            name="searchTerm"
            onChange={(event) => this.handleInputChange(event)}
            type="text"
            placeholder="Search"
          />
        </form>
        {this.state.filteredEmployees.length > 0 && (
          <EmployeeTable empList={this.state.filteredEmployees} />
        )}
      </div>
    );
  }
}

export default Search;
