import React from "react";
import Image from "next/image";

const Progress = ({ color }) => {

  // const [popUpProgress, setpopUpProgress] = useState(false);
  // handlePopUp () => {
  //   setpopUpProgress(true);
  // }

  return (
    <div className="w-28 h-28 rounded-full absolute top-4 bg-[#b7950b]">
      <div className="w-28 h-28 rounded-full absolute -translate-y-3 bg-[#f1c40f] 
                      transition-transform duration-300 ease-in-out hover:translate-y-2 
                      flex justify-center items-center
                      cursor-pointer">
        100%
      </div>
    </div>
  );
};

export default Progress;
