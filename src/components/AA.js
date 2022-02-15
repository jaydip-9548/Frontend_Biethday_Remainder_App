import React, { useState, useEffect } from "react";

export default function AA() {
  const [values, setvalues] = useState({
    name: "",
  });

  const [errors, seterrors] = useState({});

  let handleChange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
  };

  let handleData = (event) => {
    event.preventDefault();
    alert(values.name);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={values.name}
        />
        <button onClick={handleData}>Submit</button>
      </form>
    </div>
  );
}
