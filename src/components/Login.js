import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate("/")
      }}>Back</button>
     <form>
     <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enrollment No:-</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type='submit'  className="btn btn-primary">Forgot Password</button>
  <button type="submit" className="btn btn-primary">Submit</button>
  <div className="mb-3">
     <Link to="/register">Click here! If you are new user</Link>
  </div>
</form>
    </div>
  )
}

export default Login;
