import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

function UpdateData() {
  const { id } = useParams();

  console.log(id);

  const handelUpdateUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const updateaccount = { name, email };
    console.log(updateaccount);

    fetch(`http://localhost:5000/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateaccount),
    });

    alert("updated");
  };

  return (
    <div>
      <h1>Now update you info</h1>

      <div className="flex justify-center mt-10 ">
        <form
          onSubmit={handelUpdateUser}
          className="border px-5  rounded-md p-5"
        >
          <label htmlFor=">">Name</label>
          <br></br>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered"
          />
          <br></br>

          <label>
            <span>Email</span>
          </label>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered"
          />
          <br></br>

          <button
            type="submit"
            className="flex w-full text-center justify-center px-4 py-2 border mt-4 rounded-md shadow-md bg-slate-400 "
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-center mt-10">
        <NavLink to={"/"} className={`border px-10 py-2 rounded-md shadow-xl`}>Home</NavLink>
      </div>


    </div>
  );
}

export default UpdateData;
