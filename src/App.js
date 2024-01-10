import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import History from "./components/History";
import Internship from "./components/Internship";
import JobItem from './components/JobItem';
import Login from "./components/Login";
import NavBar from './components/Navbar';
import Placement from "./components/Placement";
import Register from './components/Register';
import User from './components/User';



function App() {
  const [user, setLoginUser] = useState({});
  const [progress, setProgress] = useState(0);
  const [profile, setProfile] = useState(true);
  return (
    <div className='App'>
      <Router>
        {user && user._id && profile ? (
          <NavBar setLoginUser={setLoginUser} user={user} />
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
            path="/internship"
            element={
              <Internship
              />
            }
          ></Route>
          <Route
            exact
            path="/history"
            element={
              <History
              />
            }
          ></Route>
          <Route
            exact
            path="/placement"
            element={
              <Placement
              />
            }
          ></Route>
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
          <Route
            exact
            path="/login"
            element={
              <Login
                setLoginUser={setLoginUser}
                setProfile={setProfile}
                profile={profile}
                user={user}
              />
            }
          ></Route>
          <Route
            exact
            path="/register"
            element={
              <Register
                setLoginUser={setLoginUser}
                setProfile={setProfile}
                profile={profile}
                user={user}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

