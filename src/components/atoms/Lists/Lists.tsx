import React from "react";
import { checkArrayNotEmpty } from "@/utils/helpers";

import { ListsProps } from "@/interfaces";

import ListsStyled from "./ListsStyled";

const Lists = (props: ListsProps) => {
  const { content } = props;

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

  return <ListsStyled className="tw-list-disc">{showLists()}</ListsStyled>;
};

export default Lists;
