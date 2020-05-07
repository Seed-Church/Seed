import React from "react";

const Menu = ({ href, name, icon }) => {
  return (
    <li className="mr-3 flex-1">
      <a
        href={href}
        className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
        <i className={icon}></i>
        <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
          {name}
        </span>
      </a>
    </li>
  );
};

export default Menu;
