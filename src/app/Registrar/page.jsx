import React from "react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

const page = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Login />
    </div>
  );
};

export default page;
