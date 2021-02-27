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
    search: ""
  };
  
  componentDidMount() {
    API.search().then((res) => {
      let modData = res.data.results.map((employee, index) => {
        return {
          name: employee.name.first + " " + employee.name.last,
          phone: employee.phone,
          email: employee.email,
          dob: employee.dob.date.substring(0, 10),
          picture: employee.picture.medium,
          id: index,
        };
      });
      this.setState({ employee: modData });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Border />
        <Search 
          search={this.state.search}/>
        <EmployeeTable />
        {this.state.employee.map((employee) => (
          <EmployeeCard
            image={employee.picture}
            firstName={employee.name}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob}
            key={employee.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
