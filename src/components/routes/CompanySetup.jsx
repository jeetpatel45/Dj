// eslint-disable-next-line no-unused-vars
import React from "react";
import "./CompanySetup.css";

const CompanySetup = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="W-[1920px] h-[80px] flex justify-between main-header">
        <div className="p-4 text-center">
          <img
            src="https://i0.wp.com/seamonsseeds.com/wp-content/uploads/2023/09/logo-250-x-60-e1723204883229.png?fit=183%2C61&ssl=1"
            alt="Logo"
            className="main-img"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img
              src="/avatar.png"
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
            <span className="ml-2 text-gray-700">Mason Clark</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-green-700">
              <i className="fas fa-bell"></i>
            </button>
            <button className="text-gray-700">
              <i className="fas fa-power-off"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1 my-4">
        <div className="bg-green-500 h-1 w-1/2"></div>
      </div>

      {/* Content */}
      <main className="flex-grow px-8 py-6">
        <div className="max-w-3xl mx-auto  bg-white shadow  p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Company Setup
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Office Name"
              className="p-3 border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Office Location"
              className="p-3 border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Office Country"
              className="p-3 border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Office Number"
              className="p-3 border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Office Address"
              className="p-3 border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Time Zone"
              className="p-3 border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Office Email"
              className="p-3 border rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-green-500 text-white py-2 px-6 rounded-3xl shadow hover:bg-green-600">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanySetup;
