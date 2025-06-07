import React from 'react';

const StatInfoCard = ({ count, label }) => {
  return (
    <div className="flex-1 flex gap-3 md:gap-5 bg-blue-700 rounded-[10px] p-5  " >
      <h4 className="mama text-white text-4xl md:text-5xl font-medium text-secondary">{count}</h4>
      <p className=" text-sm md:text-[16px] font-bold text-white leading-6 whitespace-pre-line">{label}</p>
    </div>
  );
};

export default StatInfoCard;
