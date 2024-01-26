import React from "react";
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
const descriptions = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°F" : "°C";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "Feels like",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "%",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 1,
      icon: <FaWind />,
      title: "mind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className=" grid grid-cols-3 gap-7   w-full">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div
          key={id}
          className="card flex flex-col items-center justify-between w-10/12 p-4 rounded-lg bg-black bg-opacity-80 text-white"
        >
          <div className="description card-icon flex flex-row items-center justify-center gap-1 ">
            {icon}
            {title}
          </div>
          <h2 className="text-xl">{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default descriptions;
