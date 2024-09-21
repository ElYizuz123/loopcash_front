import React from 'react'
import Categories from "../components/Categories";
import Sidebar from "../components/Sidebar";

const page = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Categories />
    </div>
  );
}

export default page
