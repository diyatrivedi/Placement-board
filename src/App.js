import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import JobItem from './components/JobItem';
import Login from "./components/Login";
import NavBar from './components/Navbar';
import User from './components/User';


function App() {

  const [user, setLoginUser] = useState({});

  const [progress, setProgress] = useState(0);
  const [profile, setProfile] = useState(true);
  return (
    <div className='App'>
      <Router>
        {/* <NavBar /> */}
        {user && user._id && profile ? (
          <NavBar setLoginUser={setLoginUser} />
        ) : (
          ""
        )}
        <Routes>
          {user && user._id ? (
            <Route
              exact
              path="/"
              element={
                <JobItem
                />
              }
            ></Route>
          ) : (
            <Route
              exact
              path="/"
              element={<Login setLoginUser={setLoginUser} />}
            ></Route>
          )}
          <Route
            exact
            path="/user"
            element={
              <User
                setLoginUser={setLoginUser}
                setProfile={setProfile}
                profile={profile}
                user={user}
              />
            }
          ></Route>
        </Routes>
        {/* <JobItem /> */}
      </Router>
    </div>
  )
}

export default App;
