import { useWhyDidYouUpdate } from "ahooks";
import cl from "./MySelect.module.scss";
import React, { memo } from "react";

interface Option{
  title: string;
  value: string;
}

interface MySelectProps{
  defaultValue: string;
  clss?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

const MySelect: React.FC<MySelectProps> = memo(({ defaultValue, options, value, onChange, clss}) => {
  useWhyDidYouUpdate('MySelect', ({ defaultValue, options, value, onChange, clss}))
  
  return (
    <select value={value} onChange={e => {onChange(e.target.value)}} className={`${clss} ${cl.mySelect} `}>
      <option selected={true} disabled={value === 'default'? false: true} value={defaultValue}>
        {defaultValue}
      </option>
      {options.map((item) => (
        <option
          key={item.title}
          value={item.value}
        >
          {item.title}
        </option>
      ))}
    </select>
  );
})

export default MySelect;
