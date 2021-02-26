import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Border from "./Components/Border/Border";
import Search from "./Components/Search/Search";
import EmployeeTable from "./Components/EmployeeTable/EmployeeTable";
import EmployeeCard from "./Components/EmployeeCard/EmployeeCard";

//Fetch API
const url =
  "https://randomuser.me/api/?results=10&&inc=name,email,dob,phone,picture";
fetch(url)
  .then((response) => response.json())
  .then(function (data) {
    let record = data.results;
    renderEmployeeCard(record);
  });

// const url =
//   "https://randomuser.me/api/?results=10&&inc=name,email,dob,phone,picture";
// fetch(url)
//   .then((response) => renderEmployeeCard(response));

// function renderEmployeeCard(record) {
//   console.log(record)
// }

//Loop through data from API
function renderEmployeeCard(record) {
  const items = [];
  for (let i = 0; i < record.length; i++) {
    items.push(
      <EmployeeCard
        image={record[i].picture.thumbnail}
        name={record[i].name.first}
        phone={record[i].phone}
        email={record[i].email}
        dob={record[i].dob.date.substring(0, 10)}
      />
    );
    return items;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Border />
        <Search />
        <EmployeeTable />
        <EmployeeCard />
      </div>
    );
  }
}

export default App;
