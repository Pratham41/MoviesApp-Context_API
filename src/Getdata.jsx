import React, { useState } from "react";
import axios from "axios";

function Getdata() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const allusers = users.map((user) => {
    return (
      <div>
        <p>id : {user.id}</p>
        <p>name : {user.name} </p>
        <p>email : {user.email} </p>
        <p>city : {user.address.city} </p>
        <p>website : {user.website}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Getdata using axios</h1>
      <button onClick={getUsers}>Get Data</button>
      {allusers}
    </div>
  );
}

export default Getdata;
