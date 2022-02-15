import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import photo from "../media/pt.jpg";
import pt from "../media/plus.png";
import "../css/All.css";
import "../css/Circle.css";

export default function All() {
  const [data, setData] = useState([]);
  const [status, setstatus] = useState("");

  let fetchData = ()=>{
    fetch("http://127.0.0.1:8000/remainderDataApi/")
    .then((res) => res.json())
    .then((result) => {
      setData(result);
    }
    );
  }
  useEffect(() => {
fetchData()
  }, []);

  let deleteCard = (id) => {
    // let currenttarget = event.target.id

    let deleteOption = {
      method: "DELETE",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: id,
      }),
    };
    fetch("http://127.0.0.1:8000/remainderDataApi/", deleteOption)
      .then((res) => res.json())
      .then((data) => setstatus("Deleted Successfully !!"));
    // window.reload;

    
    fetchData()
  };
  return (
    <>
      <div className="setall">
        <div className="main">
          {data.map((item) => (
            <div className="mybox" key={item.user_id}>
              <div className="img">
                <img src={photo} alt={photo} />
              </div>
              <div className="body">
                <h5>{item.name}</h5>
                <h6>{item.date}</h6>
              </div>
              <div className="action">
                {/* <button className="btn btn-primary">Edit</button> */}
                <button
                  className="btn btn-primary"
                  id={item.user_id}
                  onClick={deleteCard.bind(this, item.user_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="addingData/">
        <div
          className="myclass"
          onClick={() => {
            console.log("Clicked on buton");
          }}
        >
          <img src={pt} alt="" />
        </div>
      </Link>
    </>
  );
}
