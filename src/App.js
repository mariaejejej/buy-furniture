import { Button } from "@mui/material";
import "./App.css";
import { HomePage } from "./homePage/homePage.tsx";
import { LoginContainer } from "./login/loginContainer.tsx";
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";

const App = () => {
  return (
   
      <Routes>
        <Route exact path="/" element={<LoginContainer />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>

  );
};

export default App;
