import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Border from "./Components/Border/Border";
import Search from "./Components/Search/Search";
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.search().then((res) => {
      this.setState({ employees: res.data.results });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Border />
        {this.state.employees.length > 0 && (
          <Search employees={this.state.employees} />
        )}
      </div>
    );
  }
}

export default App;
