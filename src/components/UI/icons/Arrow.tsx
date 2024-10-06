import React from "react";

interface ArrowProps{
  clss?: string;
}

const Arrow: React.FC<ArrowProps> = ({clss}) => {
  return (
    <svg className={clss}
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6.5 6L12 1" stroke="#1E252C" strokeWidth="1.5" />
    </svg>
  );
};

export default Arrow;
