import React,{Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import History from "./pages/History";
import NoMatch from "./pages/NoMatch";


import { Route,Switch, BrowserRouter, NavLink } from "react-router-dom";




class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <ul className="NavBar">
        <li>
          <NavLink 
          activeClassName="active"
          exact to="/" Home="active">
            Home
          </NavLink>  
          </li>
           <li>
          <NavLink
          activeClassName="active" 
          to="/history" >
            History
            </NavLink>
            </li>
            </ul>
          
       <Switch>
         <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/nomatch" component={NoMatch} />
        </Switch>
        </div>
        </BrowserRouter>
     


     

    );
  }
}

export default App;
