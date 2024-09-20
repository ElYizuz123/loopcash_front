import React from 'react'
import Image from 'next/image'

const Progress = ({color}) => {
  return (
    <div className="flex justify-center items-center h-screen">
  
    <div 
      className={`w-36 h-36 rounded-full shadow-[0px_10px_10px_rgba(0,0,0,0.3)]`}
      style={{ backgroundColor: color }}
    >
    </div>
  </div>
  );
}

export default Progress;
