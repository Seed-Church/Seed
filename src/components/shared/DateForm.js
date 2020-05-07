import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateForm = ({ label, hook, selected }) => {
  return (
    <div className="w-full md:w-1/5 px-3 md:mb-0 mt-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-xs mb-2">{label}</label>
      <DatePicker
        showPopperArrow={false}
        selected={selected}
        {...hook}
        className="appearance-none block w-full p-1 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
      />
    </div>
  );
};

export default DateForm;
