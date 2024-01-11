import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    Enrollment_no: "",
    password: "",
    confirmPassword: "",
    CPI: "",
    tenthMarks: "",
    twelfthMarks: "",
    resumePdf: null,
    address: "",
    skills: "",
    clg_name: "",
    department: "",
    semester: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Register = async (e) => {
    e.preventDefault();

    const { name, email, number, Enrollment_no, password, confirmPassword } =
      user;
    if (
      name &&
      email &&
      number &&
      Enrollment_no &&
      password &&
      password === confirmPassword
    ) {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data1 = await res.json();
      // console.log(data);
      alert(data1.message);
      if (data1.success) navigate("/login");
      // history.push("/login");
    } else {
      alert("Invlid input");
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            {/* <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            /> */}
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="register" onSubmit={Register}>
              {/* {console.log("User", user)} */}
              <div
                className="flex"
                style={{
                  display: "flex",
                }}
              >
                <div>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={user.name}
                      name="name"
                      placeholder="Your Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      Contact No*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={user.number}
                      name="number"
                      placeholder="Your Number"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      Email address*
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={user.email}
                      name="email"
                      placeholder="Your Email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      Enrollment No*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={user.Enrollment_no}
                      name="Enrollment_no"
                      placeholder="Your Enrollment_no"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      Password*
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="password"
                      value={user.password}
                      placeholder="Your Password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      {" "}
                      Confirm Password*
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.confirmPassword}
                      placeholder="Re-enter Password"
                      name="confirmPassword"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      {" "}
                      10th Marks*{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.tenthMarks}
                      placeholder="Enter your 12th Marks"
                      name="tenthMarks"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="two">
                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      {" "}
                      12th Marks*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.twelfthMarks}
                      placeholder="Enter your 12th Marks"
                      name="twelfthMarks"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      {" "}
                      Current CPI*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.CPI}
                      placeholder="Enter your Current CPI"
                      name="CPI"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      {" "}
                      Address*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.address}
                      placeholder="Enter your Address"
                      name="address"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      {" "}
                      Skills*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.skills}
                      placeholder="Enter your Skills saperate by commas (,)"
                      name="skills"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      {" "}
                      Collage Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.clg_name}
                      placeholder="Enter your collage name"
                      name="clg_name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      {" "}
                      Department*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.department}
                      placeholder="Enter your Department"
                      name="department"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label"
                      style={{
                        color: "white",
                      }}
                    >
                      {" "}
                      Current Semester*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.semester}
                      placeholder="Enter your Current Semester"
                      name="semester"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <p
                className=""
                style={{
                  color: "white",
                }}
              >
                Already register?{" "}
                <button
                  style={{ padding: "0rem 2rem" }}
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign in
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;