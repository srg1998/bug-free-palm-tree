import React from 'react';

const Toast = ({ message, type }) => {
  let bgColorClass = '';
  let textColorClass = '';
  
  // Determine background and text color based on type
  switch (type) {
    case 'success':
      bgColorClass = 'bg-green-500';
      textColorClass = 'text-white';
      break;
    case 'error':
      bgColorClass = 'bg-red-500';
      textColorClass = 'text-white';
      break;
    case 'warning':
      bgColorClass = 'bg-yellow-500';
      textColorClass = 'text-black';
      break;
    default:
      bgColorClass = 'bg-gray-500';
      textColorClass = 'text-white';
  }

  return (
    <div className={`fixed ease-in-out bottom-0 right-0 m-4 p-4 rounded-lg opacity-65 ${bgColorClass} ${textColorClass}`}>
      {message}
    </div>
  );
};

export default Toast;