import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateForm = ({ label, name, controlPassing, isEditing, register }) => {
  return (
    <div className="w-full md:w-1/5 px-3 md:mb-0 mt-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-xs mb-2">{label}</label>
      <Controller
        dateFormat="yyyy-MM-dd"
        as={DatePicker}
        control={controlPassing}
        valueName={isEditing ? "" : "selected"}
        //onChange={([selected]) => selected}
        name={name}
        className="appearance-none block w-full p-1 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
        placeholderText="Select date"
        register={register}
      />
    </div>
  );
};

export default DateForm;
