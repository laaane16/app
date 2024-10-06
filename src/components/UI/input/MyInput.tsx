import InputMask from "react-input-mask";
import React from "react";

interface InputProps{
  innerRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  clss?: string;
  mask?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MyInput: React.FC<InputProps> = ({clss, innerRef, ...props}) => {
  return (
    <>
        <InputMask ref = {innerRef} {...props} maskPlaceholder={null} alwaysShowMask={false} className={`${clss} input`} ></InputMask>
    </>

  )
};

export default MyInput;
