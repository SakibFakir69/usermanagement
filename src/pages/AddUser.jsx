import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../Context/ContextApi";
import js from "@eslint/js";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AddUser() {
  const handelNewuser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    // checked
    // value name

    const creatseUser = { name, email, gender, status };
    console.log(creatseUser);

    if(name!==" " || email!==" ")
    {
        toast.success("Added Succesfully")
    
    }

  

    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creatseUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="px-10 p-4">
      {/* add id  and / sweet2 */}

      <section>
        <NavLink to={`/`}>
          All Users <i class="ri-account-pin-circle-line"></i>
        </NavLink>
      </section>
      <ToastContainer/>

      <section className="flex flex-col justify-center items-center border border-black gap-20">
        <div className="mt-4">
          <h2 className="text-4xl font-semibold">New user</h2>
          <p className="text-xl text-gray-400">
            Use the below form to create a new account
          </p>
        </div>

        <div className="  border border-green-400 p-4 w-11/12 overflow-auto scroll-auto">
          <form
            onSubmit={handelNewuser}
            className=" flex flex-col w-full px-4 mb-4 "
          >
            <label>
              <span>Name</span>
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered flex w-3/4 "
            />

            <label>
              <span>Email</span>
            </label>
            <br></br>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered flex w-3/4"
            />

            <div className="flex flex-col ">
              <div className="form-control">
                {/* <p>Gender</p> */}

                <div className="flex gap-4 ">
                  <p className="mt-2">Gender</p>

                  <label className="label cursor-pointer">
                    <span className="label-text ">Male</span>

                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="radio ml-4 checked:bg-red-500"
                      defaultChecked
                    />
                  </label>

                  <label className="label cursor-pointer">
                    <span className="label-text">Female</span>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="radio ml-4 checked:bg-blue-500"
                      defaultChecked
                    />
                  </label>
                </div>
              </div>

              <div>
                <div className="flex gap-4">
                  <p className="mt-2">Status</p>

                  <label className="label cursor-pointer">
                    <span className="label-text ">Inactive</span>

                    <input
                      type="radio"
                      name="status"
                      value="active"
                      className="radio ml-4 checked:bg-red-500"
                      defaultChecked
                    />
                  </label>

                  <label className="label cursor-pointer">
                    <span className="label-text">Active</span>
                    <input
                      type="radio"
                      name="status"
                      value="inactive"
                      className="radio ml-4 checked:bg-blue-500"
                      defaultChecked
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full border justify-center flex bg-black  text-white  px-4 py-4 rounded-md text-xl "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddUser;
