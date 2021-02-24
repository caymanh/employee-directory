import "./App.css";
import Header from "./Components/Header/Header";
import Border from "./Components/Border/Border"
import Search from "./Components/Search/Search"
import EmployeeTable from "./Components/EmployeeTable/EmployeeTable";

function App() {
  return (
    <div className="App">
      <Header />
      <Border />
      <Search />
      <EmployeeTable />
    </div>
  );
}

export default App;
