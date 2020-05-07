import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components//Navbar";

const Main = (props) => {
  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-normal mt-12">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <div className="main-content flex-1 bg-gray-300 mt-12 md:mt-2 pb-24 md:pb-5">{props.children}</div>
      </div>
    </div>
  );
};

export default Main;
