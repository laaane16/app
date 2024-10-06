import React from "react";

interface CloseProps{
  clss?: string;
}

const Close:React.FC<CloseProps> = ({clss}) => {
  return (
    <svg className={clss}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L14 14"
        stroke="#1E252C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 1L1 14"
        stroke="#1E252C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Close;
