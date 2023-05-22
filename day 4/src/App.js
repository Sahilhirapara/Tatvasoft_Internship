import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { User } from "./components/User";
import { Employee } from "./components/Employee";
import { Login } from "./components/Login";
import { ThemeProvider, createTheme } from "@material-ui/core";

const Profile = () => {
  const UserName = "sahil";
  return <h1 className="profile-cmp">Profile component</h1>;
};

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#f458",
    },
    secondary: {
      main: "#2fc30b",
    },
  },
});

function App() {
  const clickme = () => alert("clicked");
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <nav>
                <NavLink to="/">Home </NavLink>
                <NavLink to="/emp">Employee </NavLink>
                <NavLink to="/profile">Profile </NavLink>
                <NavLink to="/login">Login </NavLink>
              </nav>
            </header>
            <Routes>
              <Route path="/" element={<User name="Sahil" fun={clickme} />} />
              <Route path="/emp" element={<Employee />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
        </ThemeProvider>
    </>
  );
}

export default App;
