/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the login page after 5 seconds
    const timer = setTimeout(() => {
      navigate("/login"); // Replace "/login" with the route to your Login page
    }, 5000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold">Welcome to the Landing Page!</h1>
      <p className="mt-4 text-gray-700">
        You will be redirected to the Login page shortly...
      </p>
    </div>
  );
};

export default Landingpage;
