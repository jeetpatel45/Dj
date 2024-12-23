// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo and Tagline */}
      <div className="">
        <img className="w-auto mb-5 cmpny-img" />
      </div>

      {/* Login Form */}
      <div className=" rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-6">Login</h2>

        {/* Mobile Number Input */}
        <div className="mb-4">
          <input
            type="text"
            id="mobile"
            placeholder="Mobile Number"
            className="w-full  border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 img-4"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full  border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 img-5"
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Remember Me</span>
          </label>
          <Link
            to="/ForgotPassword"
            className="text-sm text-green-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 focus:ring-2 focus:ring-green-500">
          Sign In
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t Have an Account?{" "}
          <Link
            to="/Register"
            className="text-green-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
