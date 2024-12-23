// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Login from "./login";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5">
      <div className="">
        <img className="w-auto mb-5 cmpny-img" />
      </div>
      <h1 className="text-xl font-bold mb-8"> Company Registration</h1>
      <form className="w-[670px] flex flex-col gap-4">
        <div className="flex gap-4 justify-between w-full">
          <input
            type="text"
            className="flex-1  rounded-full text-lg border border-gray-300  focus:outline-none focus:border-green-500 img-2 "
            placeholder="Company Name"
          />
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            className="w-full  rounded-full text-lg border flex-1 border-gray-300  focus:outline-none focus:border-green-500 img-3  "
            placeholder="Admin Name"
          />
          <input
            type="Email"
            className="w-full  rounded-full text-lg border flex-1 border-gray-300  focus:outline-none focus:border-green-500 img-1 "
            placeholder="Email"
          />
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="phone"
            className="w-full  rounded-full text-lg border flex-1 border-gray-300  focus:outline-none focus:border-green-500 img-4"
            placeholder="Phone Number"
          />
          <input
            type="password"
            className="w-full  rounded-full text-lg border flex-1 border-gray-300  focus:outline-none focus:border-green-500 img-5"
            placeholder="Password"
          />
        </div>
        <Link className="flex justify-center" to="/Login">
          <button
            type="submit"
            className=" w-[400px] p-3 text-lg text-white bg-green-500 rounded-full font-bold hover:bg-green-600"
          >
            Sigh up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
