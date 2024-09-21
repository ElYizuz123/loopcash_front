import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import DataProfile from "../components/DataProfile";

const Page = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <DataProfile />
    </div>
  );
};

export default Page;
