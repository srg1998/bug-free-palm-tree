import React from 'react';

const RadioButton = ({ id, value, checked, onChange, label }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor={id}
        className="flex items-center cursor-pointer text-gray-700 select-none"
      >
        <div className="relative w-3 h-3 border border-gray-400 rounded-full">
          <div className={`absolute inset-0 rounded-full ${checked ? 'bg-blue-500' : 'bg-white'}`}></div>
        </div>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;