import React from "react";
const InputText = ({ ...props }) => {
  return (
    <input
      className="p-2 bg-slate-50 w-full border border-gray-300 focus:border-blue-400 rounded-md"
      type="text"
      {...props}
    />
  );
};

export default InputText;
