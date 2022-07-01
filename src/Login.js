import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { signInAPI , registerAPI, loginAPI } from "./actions";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log("user =>>>>>>", user.user);
  const dispatch = useDispatch();

  const handleAuth = (e) => {
    dispatch(signInAPI());
  };

  const handleReg = (e) => {
    e.preventDefault();
    dispatch(registerAPI(email,password))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(loginAPI(email,password))
  }

  return (
    <div>
      {user.user && navigate("/home")}
      Login
      <button onClick={handleAuth}>lognin</button>
      <h1>3</h1>
      
      <div className="login-container">
        <h1>Sign In</h1>
        <div className="email-box">
          <label htmlFor="">E-mail</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="password-box">
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button onClick={handleReg}>Sign In</button>

        <div className="amzon-info">

          <button onClick={handleLogin} >Create your Amazon account</button>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
