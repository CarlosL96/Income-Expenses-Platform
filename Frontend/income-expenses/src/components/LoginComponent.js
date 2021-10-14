import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
const basePath = process.env.NODE_ENV === "production" ? "/api/v1" : "http://localhost:4000";

const Login = () => {
  require("./../login.css");
  return (
    <div class="loginform">
      <FormHeader title="Login" />
      <Form />
    </div>
  );
};

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(null);
  const handleLogin = async() => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",       
      },
      body: JSON.stringify({ username, password }),
    };
    return await fetch(`${basePath}/login`, opts)
      .then((res) => res.json())
      .catch(() => ({ success: false }));
  };

  return (
    <div>
      <FormInput
        description="Username"
        placeholder="Enter your username"
        type="text"
        state={username}
        setState={setUsername}
      />
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
        state={password}
        setState={setPassword}
      />
      {error && <div class="error">{error}</div>}
      <FormButton title="Log in" loading={loading} onClick={handleLogin} />
    </div>
  );
};

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.state}
      onChange={(e) => props.setState(e.target.value)}
    />
  </div>
);

const FormButton = (props) => {
  return (
    <div id="button" class="row">
      <button onClick={props.onClick}>
        {props.loading ? "Loading..." : "Log in"}
      </button>
    </div>
  );
};

export default Login;
