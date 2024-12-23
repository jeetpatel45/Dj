// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router";

export const Forgotpassword = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo and Tagline */}
      <div className="">
        <img className="w-auto mb-5 cmpny-img" />
      </div>

      {/* Forgot Password Form */}
      <div className=" rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-6">Forgot Password</h2>

        {/* Email Input */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Email "
              className="w-full pl-10  border border-gray-300 rounded-full focus:ring-green-500 focus:border-green-500 img-8"
            />
          </div>
        </div>

        {/* Submit Button */}
        <Link to="/Login">
          <button className="w-full bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700 focus:ring-2 focus:ring-green-500">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};
