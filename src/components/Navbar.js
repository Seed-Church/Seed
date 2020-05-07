import React from "react";
import Menu from "./shared/Menu";

const Navbar = () => {
  return (
    <div className="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
      <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
          <Menu href="/form" name="Form" icon="fas fa-tasks pr-0 md:pr-3" />
          <Menu href="/card" name="Card" icon="fa fa-envelope pr-0 md:pr-3" />
          <Menu href="/board" name="ตาราง" icon="fas fa-chart-area pr-0 md:pr-3" />
          <Menu href="/blog" name="บล็อก" icon="fa fa-wallet pr-0 md:pr-3" />
           <Menu href="/upload" name="upload" icon="fa fa-wallet pr-0 md:pr-3" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
