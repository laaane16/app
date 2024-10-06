import React, { ReactNode } from 'react';

interface MyButtonProps{
  type?: 'submit' | 'button' | 'reset';
  clName: string;
  children?: ReactNode
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: React.FC<MyButtonProps> = ({type = 'button', children, clName, onClick = () => {}}) => {
  return (
    <button onClick={onClick} className={`btn ${clName}`} type={type}>{children}</button>
  )
};

export default MyButton;
