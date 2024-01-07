import React, { useState } from 'react';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import JobItem from './JobItem';
import NavBar from './Navbar';
import Login from './Login';

const Home = () => {
  const [user, setLoginUser] = useState({});

  const [progress, setProgress] = useState(0);
  const [profile, setProfile] = useState(true);
  return (
    <>
      {/* <Router>

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
        </Routes>
        <JobItem />
      </Router> */}
    </>
  );
};

export default Home;
