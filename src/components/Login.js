import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    Enrollment_no: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data1 = await res.json();
    alert(data1.message);
    setLoginUser(data1.user);
    console.log(data1.success);
    if (data1.success) {
      navigate("/");
    }
  };
  return (
    <section className="vh-100" style={{ marginTop: "7rem" }}>
      {/* <div
        className="card"
        style={{
          width: "50rem",
        }}
      >
        <div className="card-body"></div>
      </div> */}
      <h3
        className=""
        style={{
          color: "#D6E4E5",
          textAlign: "center",
          fontStyle: "italic",
          fontSize: "50px",
          paddingtop: "=10px",
          margin: "60px",
        }}
      >
        Discover What’s Beyond Your Limit!
      </h3>

      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5"></div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="login" onSubmit={login}>
              {console.log("User", user)}
              <div className="form-outline mb-4">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="Enrollment_no"
                  value={user.Enrollment_no}
                  onChange={handleChange}
                  placeholder="Enter your Enrollment No :"
                ></input>
              </div>
              <div className="form-outline mb-4">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter your Email :"
                ></input>
              </div>
              <div className="form-outline mb-4">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter your Password :"
                ></input>
              </div>

              {/* // Update password */}
              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label
                    className="form-check-label"
                    for="form2Example3 "
                    style={{
                      color: "white",
                    }}
                  >
                    Remember me!
                  </label>
                </div>
                <a
                  href="#!"
                  onClick={() => {
                    // Navigate("/changePassword");
                  }}
                  className="text-body"
                  style={{
                    color: "white",
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  // style={{
                  //   padding: "10px 30px",
                  //   backgroundColor: "#E4DEBE",
                  //   fontWeight: "600",
                  //   color: "black",
                  //   borderradius: "4px",
                  //   border: "none",
                  //   transition: "all",
                  //   ease: "0.2s",
                  // }}
                  style={{
                    padding: "0.5rem 2rem",
                  }}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
                <p
                  className="small fw-bold mt-2 pt-1 mb-0"
                  style={{
                    color: "white",
                  }}
                >
                  Don't have an account?{" "}
                  <button
                    style={{
                      padding: "0.5rem 2rem",
                    }}
                    type="submit"
                    // style={{
                    //   padding: "10px 30px",
                    //   backgroundColor: "#E4DEBE",
                    //   fontWeight: "600",
                    //   color: "black",
                    //   borderradius: "4px",
                    //   border: "none",
                    //   transition: "all",
                    //   ease: "0.2s",
                    // }}
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;