import React from "react";
const TextArea = ({ ...props }) => {
  return (
    <textarea
      rows={4}
      cols={40}
      className="p-2 bg-slate-50 w-full border border-gray-300 focus:border-blue-400 rounded-md"
      type="textarea"
      {...props}
    />
  );
};

export default TextArea;
