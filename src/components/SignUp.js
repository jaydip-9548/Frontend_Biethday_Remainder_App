import React, { useState, useEffect } from "react";
import "../css/SignUp.css";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [success, setsuccess] = useState(false);

  const [user, setuser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  
  let createUser = (event) => {
    const postOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user["name"],
        email: user["email"],
        username: user["username"],
        password: user["password"],
      }),
    };

    fetch("http://127.0.0.1:8000/userDataApi/", postOptions)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log("data: " + data.token);
          // useEffect
        },
        (Error) => {
          // setsuccess(true);
        }
      );
  };

  let getData = (e) => {
    console.log();
    let name = e.target.name;
    let value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  return (
    <div className="mycont">
      <div className="cont">
        <div className="input">
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              maxLength={100}
              value={user.name}
              onChange={getData}
              autoFocus
              autoComplete="on"
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={getData}
              value={user.email}
              maxLength={50}
              max={50}
              autoFocus
            />
            <br />
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={getData}
              value={user.username}
              maxLength={50}
              max={50}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={getData}
              value={user.password}
              max={20}
            />
            <br />
            <br />
            <div className="sub">
              <button className="btn btn-primary" onClick={createUser}>
                Sign Up
              </button>
            </div>
          </form>
          <br />
          {/* <h1>{success}</h1> */}
          <Link to="../signin/" className="text-white">
            Already SignUp !!
          </Link>
        </div>
      </div>

      {/* <h1>Hhwhwhwhw</h1> */}
    </div>
  );
}
