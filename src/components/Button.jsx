import React from 'react';

const Button = ({ value, className }) => {
  return (
    <button
      className={`rounded-lg bg-[#eae3dc] p-4 text-[32px] text-xl font-bold text-[#444b5a] hover:bg-gray-600 ${className}`}
    >
      {value}
    </button>
  );
};

export default Button;
