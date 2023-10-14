import React from "react";
import { checkArrayNotEmpty } from "@/utils/helpers";

import { ListsProps } from "@/interfaces";

import ListsStyled from "./ListsStyled";

const Lists = (props: ListsProps) => {
  const { content, type = "disc", className = "" } = props;

  const showLists = () => {
    if (checkArrayNotEmpty(content)) {
      const show = content.map((value, index) => {
        return (
          <li key={index}>
            <span>{value}</span>
          </li>
        );
      });

      return show;
    } else {
      return null;
    }
  };

  return (
    <ListsStyled className={`${className}`} type={type}>
      {showLists()}
    </ListsStyled>
  );
};

export default Lists;
