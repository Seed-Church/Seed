import React from "react";

const Form = ({ label, type, name, register, errors }) => {
  return (
    <div className="w-full md:w-1/5 px-3 md:mb-0 mt-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-xs mb-2">{label}</label>
      <input
        className="appearance-none block w-full p-1 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
        type={type}
        name={name}
        ref={register}
      />
      <span style={{ color: "red", fontSize: "0.700em" }}>{errors && errors.message}</span>
    </div>
  );
};

export default Form;
