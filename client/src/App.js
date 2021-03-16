import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass,setConfirmPass] = useState('');
  const [email, setEmail] = useState('');
  const registre = () => {
    Axios.post('http://localhost:3001/api/insert', 
    {
      userName: userName,
      password: password,
      confirmPass: confirmPass,
      email: email,
      lastName : lastName,
      firstName: firstName,
      email: email
    }).then(() => {
      alert('insert success');
    });
  };
  return (
    <div className="App">
      <div className="form">
        <label>userName</label>
        <input
          type="text"
          name="userName"
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
        <label>fistName</label>
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
        <label>lastName</label>
        <input
          type="text"
          name="lastName"
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
        <label>email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <label>confirmPass</label>
        <input
          type="password"
          name="confirmPass"
          onChange={(e) => {
            setConfirmPass(e.target.value)
          }}
        />
        <button onClick={registre}>Submit</button>
      </div>
    </div>
  );
  }

  export default App;
