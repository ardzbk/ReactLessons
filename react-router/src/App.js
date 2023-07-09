import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from "./components/Home"
import About from "./components/About"
import Users from "./components/Users"


function App() {
  return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/users" Component={Users}></Route>
        </Routes>
      </div>
    </Router>
  );
}



export default App;
