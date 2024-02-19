import React from "react";
const Checkbox = ({ ...props }) => {
  return (
    <label className="flex gap-x-4 items-center">
      <input type="checkbox" {...props} />
      {props.label}
    </label>
  );
};

export default Checkbox;
