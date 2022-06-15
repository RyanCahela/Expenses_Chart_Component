import React from "react";
import data from "../data/data.json";
import Bar from "./Bar";

const BarChart = () => {
  const currentDayInt = new Date().getDay();
  const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const currentDay = weekday[currentDayInt];

  return (
    <div className="flex justify-between items-end">
      {data.map((data) => (
        <div
          key={data.day}
          className="flex flex-col pt-8 items-center gap-3 sm:gap-2">
          <Bar
            height={parseInt(data.amount * 3)}
            isCurrentDay={currentDay === data.day}
          />
          <span>{data.day}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
