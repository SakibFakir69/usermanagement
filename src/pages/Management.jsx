import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context/ContextApi";
import { useLoaderData } from "react-router-dom";
import ShowUser from "./ShowUser";

function Management() {
  // const {handleNewuser} = useContext(MyContext);

  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);

  const handelDeleteitem = (id) => {
    const fiiltered = users.filter((item) => item._id !== id);
    setusers(fiiltered);
  };
  console.log(users);

  

  return (
    <div className="shadow-md border border-black mt-10 p-2">
      <h1>This is management user </h1>

      <div class="px-2">
        <table class="table table-zebra">
          <thead className="bg-black text-white">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th></th>

              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>

      {users.map((item, key) => (
        <ShowUser
          data={item}
          index={key + 1}
          handelDeleteitem={handelDeleteitem}
        />
      ))}
    </div>
  );
}

export default Management;
