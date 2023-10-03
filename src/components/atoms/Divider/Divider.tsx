import React from "react";

import { DividerProps } from "@/interfaces";

import DividerStyled from "./DividerStyled";

function Divider(props: DividerProps) {
  const { className, width } = props;
  return (
    <DividerStyled
      className={`tw-w-full tw-flex tw-justify-center ${className}`}
      width={width}
    >
      <hr />
    </DividerStyled>
  );
}

Divider.defaultProps = {
  width: "100%",
};

export default Divider;
