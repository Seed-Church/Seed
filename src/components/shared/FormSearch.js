import React from "react";

const FormSearch = ({ handleChange }) => {
  return (
    <div className="container mx-5 py-3">
      <input
        className="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
        type="search"
        onChange={handleChange}
        placeholder="ค้นหาด้วย ชื่อเล่น,ชื่อจริง,นามท้าย,ลำดับที่..."></input>
    </div>
  );
};

export default FormSearch;
