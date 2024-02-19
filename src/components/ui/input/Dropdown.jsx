import React from "react";
const Dropdown = ({ ...props }) => {
  return (
    <select
      {...props}
      className="px-2 bg-slate-50 w-full h-full border border-gray-300 focus:border-blue-400 rounded-md min-h-[40px]"
    >
      {props.options.map((option, index) => (
        <option key={`optiom-${index}`} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
