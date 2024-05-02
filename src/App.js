import "./App.css";
import { HomePage } from "./homePage/homePage.tsx";
import { LoginContainer } from "./login/loginContainer.tsx";
import { Routes, Route} from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/factories/store-factory.ts";
import { SignUpContainer } from "./signUp/signUpContainer.tsx";
import { useEffect } from "react";
import { setUsers } from "./redux/action-creators/users.ts";

const RouteComponent = ()=> {
   const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {console.log(json)



        dispatch(setUsers(json))
    });
  
  
}, [])

return (
  
   <Routes>
       <Route exact path="/" element={<LoginContainer />} />
       <Route path="/sign-up" element={<SignUpContainer />} />

       <Route path="/home" element={<HomePage />} />
     </Routes>

  
     
 );
}
const App = () => {
 
  return (
   <Provider store={store}>
    <RouteComponent />
       
   </Provider>
      
  );
};

export default App;
