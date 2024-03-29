import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ LoginUser, user }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Placement-Board
          </Link>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/placement">
                  Placement
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/internship">
                  Internship
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history">
                  History
                </Link>
              </li>
            </ul>
            <ul className="">

              <Link className="nav-link " to="/user">
                <div>
                  Hello {user.name}
                  <i
                    className="fa-solid fa-user fa-beat-fade fa-xl
                      mx-3 py-3"
                  ></i>
                </div>
              </Link>

            </ul>
          </div>
        </div>
      </nav >
    </>
  );
};

export default NavBar;