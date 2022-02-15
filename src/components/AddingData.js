import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "../css/AddingData.css";
export default function AddingData() {
  // setting state
  const [add, setadd] = useState({
    Name: "",
    Date: "",
    Quota: "",
    user_id: "null",
  });
  const [success, setsuccess] = useState(false);

  let getData = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setadd({ ...add, [name]: value });
  };
  // Add data using Api
  let AddingData = (event) => {
    // event.preventDefault()

    const postOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: add["Name"],
        date: add["Date"],
        quota: add["Quota"],
        user_id: Date.now().toString(36)+Math.random().toString(36).substring(2),
      }),
    };

    fetch("http://127.0.0.1:8000/remainderDataApi/", postOptions)
      .then((res) => res.json())
      .then(
        (data) => {
          // console.log(data)
          setsuccess(true);
        },
        (error) => {
          // console.log("Error: ",error.message)
        }
      );

    window.history.back()
  };

  return (
    <div>
      {/* { success ? 'Sucess':'Not success'} */} 
      <div className="mycont">
        <div className="cont">
          <div className="input">
            <form action="">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                maxLength={100}
                autoFocus
                value={add.Name}
                onChange={getData}
              />
              <br />
              <br />
              <input
                type="date"
                name="Date"
                maxLength={50}
                max={50}
                autoFocus
                value={add.Date}
                onChange={getData}
              />
              <br />
              <br />

              <textarea
                name="Quota"
                id="quota"
                cols="30"
                rows="10"
                placeholder="Quota..."
                value={add.Quota}
                onChange={getData}
              ></textarea>
              {/* <input type="file" name="file" accept="image/*"  /> */}
              <br />
              <br />

              <div className="sub">
                <button className="btn btn-primary" onClick={AddingData}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
