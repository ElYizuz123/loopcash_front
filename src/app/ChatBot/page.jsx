import React from "react";
import Sidebar from '../components/Sidebar'
import ChatBot from '../components/ChatBot'

const page = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <ChatBot />
    </div>
  );
};

export default page;
