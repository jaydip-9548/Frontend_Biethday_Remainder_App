import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/SignIn.css";
export default function SignIn() {
  const [Data, setData] = useState([]);
  const [IsLoaded, setIsLoaded] = useState(false);

  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/userDataApi/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
          console.log(result.token)
        },
        (error) => {
          setIsLoaded(true);
          console.log("Error" + error);
        }
      );
  }, []);

  let getData = (event) => {
    let username = event.target.name;
    let password = event.target.value;

    setuser({ ...user, [username]: password });
  };

  let verifyUser = (event) => {
    event.preventDefault();
    
  
  };


  return (
    <div className="mycon">
      <div className="con">
        <div className="input">
          <form>
            <input
              type="text"
              name="username"
              placeholder="Username"
              maxLength="50"
              onChange={getData}
              value={user.username}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              maxLength="20"
              onChange={getData}
              value={user.password}
            />
            <br />
            <br />
            <div className="sub">
              <button
                className="btn btn-primary"
      
                onClick={verifyUser}
              >
                Login
              </button>
            </div>
          </form>
          <br />
          <Link to="../signup/" className="text-white">
            Not Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
