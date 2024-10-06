import { FC, useRef } from "react";
import Arrow from "../icons/Arrow";
import cl from "./Accordeon.module.scss";
import React from "react";
import { IAccordeon } from "../../../types/types";

interface AccordeonItemProps {
  item: IAccordeon;
  index: number;
  openAccordeonItem: (item: IAccordeon) => void;
}

const AccordeonItem: FC<AccordeonItemProps> = ({item, index, openAccordeonItem}) => {
  const bodyRef = useRef<HTMLDivElement>(null)
  return (
    <li
      onClick={() => {
        openAccordeonItem(item);
      }}
      className={
        item.isOpen ? `${cl.accordeon__item} ${cl.active}` : cl.accordeon__item
      }
      key={index}
    >
      <div id={item.id.toString()} className={cl.accordeon__title}>
        {item.title}
      </div>
      <Arrow clss={cl.accordeon__arrow} />
      <div
        style={{ height: item.isOpen ? bodyRef.current?.scrollHeight : "0" }}
        className={cl.accordeon__collapse}
      >
        <div ref={bodyRef} className={cl.accordeon__body}>{item.body}</div>
      </div>
    </li>
  );
};

export default AccordeonItem;
