import React, { useState, useEffect, useCallback } from "react";

import { dividerProps, handleSetWidthFunc } from "@/interfaces";
import { isWindowSize1024 } from "@/utils/helpers";
import { SIZE_DIVIDER_DEFAULT } from "@/utils/constant";

import DividerStyled from "./DividerStyled";

function Divider(props: dividerProps) {
  const {
    className = "",
    width: widthProps = SIZE_DIVIDER_DEFAULT,
    position = "center",
  } = props;
  const [width, setWidth] = useState<string>(SIZE_DIVIDER_DEFAULT);

  useEffect(() => {
    const handleSetWidth: handleSetWidthFunc = () => {
      if (!isWindowSize1024()) {
        setWidth(widthProps as string);
      }
    };

    handleSetWidth();
  }, [widthProps]);

  return (
    <DividerStyled
      className={`tw-w-full tw-flex tw-my-4 tw-justify-${position} ${className}`}
      width={width}
    >
      <hr />
    </DividerStyled>
  );
}

export default Divider;
