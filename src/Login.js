import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { signInAPI } from "./actions";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState);

  console.log("dder", user.user);
  const dispatch = useDispatch();

  const handleAuth = (e) => {
    dispatch(signInAPI());
  };

  return (
    <div>
      {user && navigate("/home")}
      Login
      <button onClick={handleAuth}>lognin</button>
      <h1>3</h1>
    </div>
  );
}

export default Login;
