import React from "react";
import { Link,useNavigate  } from "react-router-dom";

const NavBar = () => {
  const navigate=useNavigate();

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
              Placement-Board
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  <i
                    className="fa-solid fa-user fa-beat-fade fa-xl"
                    style={{
                      color: "#1e3152",
                      padding: "left",
                      margin: "15px 15px",
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "absolute",
                      right: "0",
                    }}
                  ></i>
                </Link>
              </li>
              <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2 my-2 my-sm-0"  style={{
                      color: "#1e3152",
                      padding: "left",
                      margin: "15px 15px",
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "absolute",
                      right: "0",
                    }}
           onClick={()=>{
          navigate("/login")
        }}>Login</button>
        
      </div>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;