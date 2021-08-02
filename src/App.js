import './App.css';
import NavBar from './Component/NavBar/Index';
import SideBar from './Component/SideBar/Index';
import Home from './Pages/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from './Component/userList/UserList';
import User from './Pages/user/User';
import Login from './Pages/Login/login'

function App() {
  return (


    <Router>

      <Switch>

      <Route path = '/login'>
        <Login/>
      </Route>

      <div className = 'App'>
        <NavBar/>
        <div className="container">
          <SideBar/>

          <Switch>

          <Route exact path="/">
              <Home/>
          </Route>

          <Route path="/users">
              <UserList/>
          </Route>

          <Route path="/user/:userId">
              <User/>
          </Route>

          </Switch>
        </div>
      </div>
      </Switch>
 
    </Router>


    //  <Router>

    //   <Route exact path="/login">
    //     <Login />
    //   </Route>

    //   <div className="App">
    //     <NavBar/>
    //     <div className="container">
    //     <SideBar/>
    //     <Switch>

    //       <Route path="/">
    //           <Home/>
    //       </Route>
    //       <Route path="/users">
    //           <UserList/>
    //       </Route>
    //       <Route path="/user/:userId">
    //           <User/>
    //       </Route>
    //     </Switch>   
    //     </div>
    //   </div>

    // </Router>


  );
}

export default App;
