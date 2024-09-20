import React from "react";
import ButtonCalendar from "../components/ButtonCalendar";
import Progress from "./Progress";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="header">
        <ButtonCalendar />
        <div className="user-info">
          <span>Juan Perez</span>
        </div>
        <div className="flex flex-col">
          <div className=" relative hover:animate-fade-down hover:animate-once  ">
            <Progress color='#ffff00' />
          </div>
          {/* en teoria aqui se acaba  */}
          <div className="relative h-10 border-l-4 border-dotted border-gray-500">
            {" "}
          </div>

          <div className="relative hover:animate-fade-down hover:animate-once ml-36 ">
            <Progress color='#cdcdcd'/>
          </div>
          <div className="relative hover:animate-fade-down hover:animate-once ml-20 ">
            <Progress color='#cdcdcd'/>
          </div>

          {/* en teoria aqui se acaba  */}
        </div>
        <div className="quote">
          <p>La meta siempre está cerca</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
