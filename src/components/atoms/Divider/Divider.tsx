import React from "react";

import { DividerProps } from "@/interfaces";

import DividerStyled from "./DividerStyled";

function Divider(props: DividerProps) {
  const { className, width = "100%", position = "center" } = props;
  return (
    <DividerStyled
      className={`tw-w-full tw-flex tw-justify-${position} ${className}`}
      width={width}
    >
      <hr />
    </DividerStyled>
  );
}

export default Divider;
