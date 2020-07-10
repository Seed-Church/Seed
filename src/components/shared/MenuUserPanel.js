import React from "react";

const MenuUserPanel = ({ href, name, icon }) => {
  return (
    <a href={href} className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block">
      <i className={icon}></i> {name}
    </a>
  );
};

export default MenuUserPanel;
