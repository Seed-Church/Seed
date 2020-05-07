import React from "react";

const Card = ({ title, value, color, icon, iconColor }) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
      <div className={"bg-green-100 border-b-4 rounded-lg shadow-lg p-5 " + color}>
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className={iconColor}>
              <i className={icon}></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h5 className="font-bold uppercase text-gray-600">{title}</h5>
            <h3 className="font-bold text-3xl">
              {value}
              <span className="text-green-500">
                <i className="fas fa-caret-up"></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
