import React from "react";

import { dividerProps } from "@/interfaces";

import DividerStyled from "./DividerStyled";

function Divider(props: dividerProps) {
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
