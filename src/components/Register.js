import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    Enrollment_no: "",
    password: "",
    confirmPassword: "",
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
    const { name, email, number, Enrollment_no, password, confirmPassword } = user;
    if (name && email && number && Enrollment_no && password && password === confirmPassword) {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data1 = await res.json();
      // console.log(data);
      alert(data1.message);
      if (data1.success) navigate("/");
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
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="register" onSubmit={Register}>
              {console.log("User", user)}




              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name:-</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={user.name}
                  name='name'
                  placeholder="Your Name"
                  onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Contact No:-</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={user.number}
                  name='number'
                  placeholder="Your Number"
                  onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={user.email}
                  name='email'
                  placeholder="Your Email"
                  onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Enrollment No:-</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={user.Enrollment_no}
                  name='Enrollment_no'
                  placeholder="Your Enrollment_no"
                  onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                  name='password'
                  value={user.password}
                  placeholder="Your Password"
                  onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label"> Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                  value={user.confirmPassword}
                  placeholder="Re-enter Password"
                  name='confirmPassword'
                  onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
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
  )
}

export default Register;
