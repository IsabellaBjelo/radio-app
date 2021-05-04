import React, { useState } from "react";
import style from '../css/Login.module.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={style.login}>
      <h2>Välkommen! Logga in här:</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.email}>
          {/* <label>Email</label> */}
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.password}>
          {/* <label>Password</label> */}
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style.loginBtn}>
          <button type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );

}
 
export default Login;
