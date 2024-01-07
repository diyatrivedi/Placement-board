import React from 'react'
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate("/login")
      }}> Back To Login</button>
       <form>
       <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name:-</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Contact No:-</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Enrollment No:-</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
 
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"> Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>
    </div>
  )
}

export default Register;
