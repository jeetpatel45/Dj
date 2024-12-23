// eslint-disable-next-line no-unused-vars
import React from "react";
import "./CompanySetup.css";
import Header from "./Header";
import { Link } from "react-router";

const CompanySetup = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Progress Bar */}

      {/* Content */}
      <main className="flex-grow px-8 py-6 bg-gray-100">
        <div className="flex justify-between px-[110px]">
          <p>Company Setup</p>
          <p>Office Timings</p>
        </div>
        <div className="w-[80%] ml-[150px] bg-gray-200 h-1 my-10 flex">
          {/* <img className="round-img"></img> */}

          <div className="w-[23px] h-[23px] mt-[-10px] rounded-full bg-green-500 "></div>
          <div className=" border-2 border-green-500 dotted"></div>
          <div className="bg-green-500 h-1 w-1/2"></div>
          <div className="w-[23px] h-[23px] flex ml-[542px] mt-[-10px] rounded-full bg-gray-200 "></div>
          <div className=" border-2  border-gray-200 dotted"></div>
        </div>
        <div className=" mt-[75px] max-w-[77rem] mx-auto rounded-xl  bg-white shadow  p-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
            Company Setup
          </h2>
          <div className=" grid gap-4">
            <div className="flex justify-between gap-2">
              <input
                type="text"
                placeholder="Office Name"
                className="cmpnysetup-img-1 bg-gray-200 w-full py-[10px] text-[20px] px-[42px] border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Office Location"
                className="cmpnysetup-img-2 bg-gray-200 w-full py-[10px] text-[20px] px-[42px] border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Office Country"
                className="cmpnysetup-img-3 bg-gray-200 w-full py-[10px] text-[20px] px-[42px] border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex justify-between gap-2">
              <input
                type="text"
                placeholder="Office Number"
                className="cmpnysetup-img-4 bg-gray-200 w-full py-[10px] text-[20px] px-[42px] border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Office Address"
                className=" cmpnysetup-img-5 bg-gray-200 w-full py-[10px] text-[20px] px-[42px] border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Time Zone"
                className=" cmpnysetup-img-6 bg-gray-200 w-full py-[10px] text-[20px] px-[42px] border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <input
              type="email"
              placeholder="Office Email"
              className=" cmpnysetup-img-7 bg-gray-200 w-full py-[10px] text-[20px] px-[42px] border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <Link to="/WorkTiming" className="flex justify-end mt-6">
            <button className="bg-green-500 text-white py-[10px] text-[20px] px-[42px] rounded-3xl shadow hover:bg-green-600">
              Next
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CompanySetup;
