import { IAccordeon } from "../../../types/types";
import cl from "./Accordeon.module.scss";
import AccordeonItem from "./AccordeonItem";
import React from "react";


type AccordeonProps = {
  accordeon: IAccordeon[];
  setAccordeon: (items: IAccordeon[]) => void;
};

const Accordeon: React.FC<AccordeonProps> = ({ accordeon, setAccordeon }) => {
  const openAccordeonItem = (accordeonItem: IAccordeon) => {
    setAccordeon(
      accordeon.map((item) => {
        if (item.id !== accordeonItem.id) {
          return { ...item, isOpen: false };
        } else {
          return { ...accordeonItem, isOpen: !accordeonItem.isOpen };
        }
      })
    );
  };
  return (
    <ul className={cl.accordeon}>
      {accordeon.map((item, index) => {
        return (
          <AccordeonItem
            key={index}
            item={item}
            index={index}
            openAccordeonItem={openAccordeonItem}
          />
        );
      })}
    </ul>
  );
};

export default Accordeon;
