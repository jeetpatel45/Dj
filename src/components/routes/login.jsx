// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo and Tagline */}
      <div className="text-center mb-8">
        <img
          src="data:image/jpeg;base64,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" // Your logo data here
          alt="Logo"
          className="w-auto mb-5"
        />
        <p className="text-green-600 font-semibold mt-2">
          We breed for next generation.
        </p>
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
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
