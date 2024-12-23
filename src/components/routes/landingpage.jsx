/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the login page after 5 seconds
    const timer = setTimeout(() => {
      navigate("/login"); // Replace "/login" with the route to your Login page
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className=" mt-[230px] flex w-full justify-between items-center">
      <div className="flex w-full justify-between align-middle items-center ">
        <img className="landing-2"></img>
        <img className="cmpnylogo"></img>
        <img className="landing-1"></img>
      </div>
    </div>
  );
};

export default Landingpage;
