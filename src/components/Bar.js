import React from "react";

const Bar = ({ height, isCurrentDay }) => {
  const bgColor = isCurrentDay ? "bg-cyan" : "bg-red";
  return (
    <div
      className={`w-8 sm:w-[50px] ${bgColor} rounded-sm`}
      style={{ height: `${height}px` }}></div>
  );
};

export default Bar;
