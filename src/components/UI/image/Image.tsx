import { FC } from "react";
import React from "react";

interface ImageProps{
  imageSrc: string;
  clss: string;
}

const Image: FC<ImageProps> = ({imageSrc, clss}) => {
  return (
    <img className={clss} src={imageSrc} alt="#" />
  )
};

export default Image;
