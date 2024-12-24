// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="flex  bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 text-center">
          <img
            src="https://i0.wp.com/seamonsseeds.com/wp-content/uploads/2023/09/logo-250-x-60-e1723204883229.png?fit=183%2C61&ssl=1"
            alt="Logo"
            className="mx-auto h-20"
          />
        </div>
        <ul className="mt-6 grid gap-[13px]">
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Dashboard
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Real Time Tracking
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Employees
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Products
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Orders
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Collections
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Expenses
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Leave
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Tasks
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Customers
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Reports
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Announcements
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Complaints
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">150</div>
                <div className="text-sm">Employees</div>
              </div>
            </div>
            <div className="bg-green-100 text-green-600 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">15</div>
                <div className="text-sm">Products</div>
              </div>
            </div>
            <div className="bg-orange-100 text-orange-600 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">300</div>
                <div className="text-sm">Customers</div>
              </div>
            </div>
            <div className="bg-blue-100 text-blue-600 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">150</div>
                <div className="text-sm">Orders</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-6 gap-4 mb-6">
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Employees</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Products</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Customer</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Order</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Collection</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Expenses</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Complaint</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Announcement</div>
            </div>
          </div>

          {/* Tables */}
          <div className="grid grid-cols-2 gap-6">
            {/* Latest Orders */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold mb-4">Latest Orders</h3>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Customer Name</th>
                    <th className="px-4 py-2">Pkts/Kg</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Employee Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2">Alice Thompson</td>
                    <td className="px-4 py-2">100 Kg</td>
                    <td className="px-4 py-2">28/11/2023</td>
                    <td className="px-4 py-2">John Smith</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Emily Davis</td>
                    <td className="px-4 py-2">50 Pkts</td>
                    <td className="px-4 py-2">28/11/2023</td>
                    <td className="px-4 py-2">James Johnson</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Latest Collections */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold mb-4">Latest Collections</h3>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Customer Name</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Employee Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2">EcoSeed Harvesters</td>
                    <td className="px-4 py-2">20000</td>
                    <td className="px-4 py-2">28/11/2023</td>
                    <td className="px-4 py-2">John Smith</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">GreenThumb Seeds</td>
                    <td className="px-4 py-2">500000</td>
                    <td className="px-4 py-2">28/11/2023</td>
                    <td className="px-4 py-2">James Johnson</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
