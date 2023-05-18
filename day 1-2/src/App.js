//import logo from "./logo.svg";
import "./App.css";
import { User } from "./components/User";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Employee } from "./components/Employee";

function App() {
  const clickme = () => alert("clicked");
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          
          <NavLink to="/">Home</NavLink>
          <NavLink to="/emp">Employee</NavLink>

          <Routes>
            <Route path="/" element={<User name="Sahil" fun={clickme} />} />
            <Route path="/emp" element={<Employee />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
