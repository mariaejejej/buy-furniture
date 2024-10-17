import "./App.css";
import { HomePage } from "./homePage/homePage.tsx";
import { Routes, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/factories/store-factory.ts";
import { useEffect } from "react";
import { setUsers } from "./redux/action-creators/users.ts";
import { Container } from "./container.tsx";
import { Login } from "./login/login.tsx";
import { SignUp } from "./signUp/signUp.tsx";
import { Profile } from "./profile/profile.tsx";

const RouteComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch(setUsers(json));
      });
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
        
        
        <HomePage />} 
        
      />
      <Route
        path="/sign-up"
        element={
          <Container title={"Sign up"}>
            <SignUp />
          </Container>
        }
      />
      <Route path="/login" element={
          <Container title={"Login"}>
            <Login />
          </Container>
        } />
      <Route path="/profile" 
      element={
          <Container title={"Profile"}>
            <Profile />
          </Container>
        } />

    </Routes>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <RouteComponent />
    </Provider>
  );
};

export default App;
