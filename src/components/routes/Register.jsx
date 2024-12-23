// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import * as Yup from "yup";

const Register = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    adminName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize the navigate function

  // Yup validation schema
  const validationSchema = Yup.object({
    companyName: Yup.string()
      .required("Company Name is required")
      .min(2, "Company Name must be at least 2 characters"),
    adminName: Yup.string()
      .required("Admin Name is required")
      .min(2, "Admin Name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),
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
      console.log("Form submitted successfully:", formData);

      // Redirect to login page
      navigate("/login");
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5">
      <div className="">
        <img className="w-auto mb-5 cmpny-img" alt="Company Logo" />
      </div>
      <h1 className="text-xl font-bold mb-8">Company Registration</h1>
      <form className="w-[670px] flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-4 justify-between w-full">
          <input
            type="text"
            name="companyName"
            className="flex-1 rounded-full text-lg border border-gray-300 focus:outline-none focus:border-green-500 img-2"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          <br />
        </div>
        {errors.companyName && (
          <div className="text-red-500 text-sm">{errors.companyName}</div>
        )}
        <div className="flex gap-3 items-center">
          <div className="grid w-[48%]">
            <input
              type="text"
              name="adminName"
              className="w-full rounded-full text-lg border flex-1 border-gray-300 focus:outline-none focus:border-green-500 img-3"
              placeholder="Admin Name"
              value={formData.adminName}
              onChange={handleChange}
            />
            {errors.adminName && (
              <div className="text-red-500 text-sm">{errors.adminName}</div>
            )}
          </div>
          <div className="grid w-[48%]">
            <input
              type="email"
              name="email"
              className="w-full rounded-full text-lg border flex-1 border-gray-300 focus:outline-none focus:border-green-500 img-1"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="grid w-[48%]">
            <input
              type="text"
              name="phone"
              className="w-full rounded-full text-lg border flex-1 border-gray-300 focus:outline-none focus:border-green-500 img-4"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className="text-red-500 text-sm">{errors.phone}</div>
            )}
          </div>
          <div className="grid w-[48%]">
            <input
              type="password"
              name="password"
              className="w-full rounded-full text-lg border flex-1 border-gray-300 focus:outline-none focus:border-green-500 img-5"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[400px] p-3 text-lg text-white bg-green-500 rounded-full font-bold hover:bg-green-600"
          >
            Sign Up
          </button>
        </div>
      </form>
      <Link className="flex justify-center mt-5" to="/Login">
        Already have an account? Login
      </Link>
    </div>
  );
};

export default Register;
