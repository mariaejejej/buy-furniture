import { Button } from "@mui/material";
import "./App.css";
import { HomePage } from "./homePage/homePage.tsx";
import { LoginContainer } from "./login/loginContainer.tsx";
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/factories/store-factory.ts";

const App = () => {
  return (
   <Provider store={store}>
    <Routes>
        <Route exact path="/" element={<LoginContainer />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>

   </Provider>
      
  );
};

export default App;
