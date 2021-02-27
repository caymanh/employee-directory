import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Border from "./Components/Border/Border";
import Search from "./Components/Search/Search";
import EmployeeTable from "./Components/EmployeeTable/EmployeeTable";
import EmployeeCard from "./Components/EmployeeCard/EmployeeCard";
import API from "./utils/API";

class App extends Component {
  state = {
    employee: [],
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        this.setState({ employee: res.data.results });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Border />
        <Search />
        <EmployeeTable />
        {this.state.employee.map((employee) => (
          <EmployeeCard
            image={employee.picture.medium}
            firstName={employee.name.first}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob.date.substring(0, 10)}
            key={employee.email}
          />
        ))}
      </div>
    );
  }
}

export default App;
