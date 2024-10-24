import React from 'react';

const Display = ({ result }) => {
  return (
    <div className="mb-4 h-[80px] w-[100%] justify-around rounded-lg bg-[#181f34] p-4 pr-2.5 text-right text-white">
      <div className="font-spartan text-[28px] font-bold">{result}</div>
    </div>
  );
};

export default Display;
