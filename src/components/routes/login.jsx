// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import * as Yup from "yup";

const Login = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize navigate function

  // Yup validation schema
  const validationSchema = Yup.object({
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile Number must be 10 digits")
      .required("Mobile Number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate the form data
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log("Login successful:", formData);

      // Redirect to CompanySetup page
      navigate("/CompanySetup");
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo and Tagline */}
      <div className="">
        <img className=" cmpny-img" />
      </div>

      {/* Login Form */}
      <div className="rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Mobile Number Input */}
          <div className="mb-4">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 img-4"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <div className="text-red-500 text-sm">{errors.mobile}</div>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 img-5"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
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
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 focus:ring-2 focus:ring-green-500"
          >
            Sign In
          </button>
        </form>

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
