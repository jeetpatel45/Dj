// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/routes/Register";
import Login from "./components/routes/login";
import Landingpage from "./components/routes/landingpage";
import { Forgotpassword } from "./components/routes/Forgotpassword";
import Dashboard from "./components/routes/Dashboard";
import CompanySetup from "./components/routes/CompanySetup";
import Worktimming from "./components/routes/Worktimming";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPassword" element={<Forgotpassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Companysetup" element={<CompanySetup />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/WorkTiming" element={<Worktimming />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
