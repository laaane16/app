import React from "react";

interface SectionAboutSecondItemProps{
  clss?: string;
}

const SectionAboutSecondItem: React.FC<SectionAboutSecondItemProps> = ({clss}) => {
  return (
    <svg
      className={clss}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_213_9)">
        <path
          d="M0.75 8.25C4.89225 8.25 8.25 11.6078 8.25 15.75C8.25 11.6078 11.6078 8.25 15.75 8.25C11.6078 8.25 8.25 4.89225 8.25 0.75C8.25 4.89225 4.89225 8.25 0.75 8.25Z"
          stroke="#999999"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.25 39.75C36.3922 39.75 39.75 43.1078 39.75 47.25C39.75 43.1078 43.1078 39.75 47.25 39.75C43.1078 39.75 39.75 36.3922 39.75 32.25C39.75 36.3922 36.3922 39.75 32.25 39.75Z"
          stroke="#999999"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.5 24C31.3875 24 24 31.3875 24 40.5C24 31.3875 16.6125 24 7.5 24C16.6125 24 24 16.6125 24 7.5C24 16.6125 31.3875 24 40.5 24Z"
          stroke="#999999"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_213_9">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SectionAboutSecondItem;
