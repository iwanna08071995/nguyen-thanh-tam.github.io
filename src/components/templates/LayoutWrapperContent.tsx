import React, { useState, useEffect } from "react";

import Divider from "@/components/atoms/Divider";
import {
  layoutWrapperContentProps,
  handleSetLeftPositionFunc,
} from "@/interfaces";
import { isWindowSize1024 } from "@/utils/helpers";

const LEFT_POSITION_DEFAULT = "center";

function LayoutWrapperContent(props: layoutWrapperContentProps) {
  const {
    ContentLeft,
    ContentRight,
    leftPosition: leftPositionProps = LEFT_POSITION_DEFAULT,
    rightPosition = "center",
  } = props;

  const [leftPosition, setLeftPosition] = useState<string>(
    LEFT_POSITION_DEFAULT
  );

  useEffect(() => {
    const handleSetLeftPosition: handleSetLeftPositionFunc = () => {
      if (!isWindowSize1024()) {
        setLeftPosition(leftPositionProps as string);
      }
    };

    handleSetLeftPosition();
  }, [leftPositionProps]);

  const showContentLeft = () => {
    if (ContentLeft) {
      return ContentLeft;
    }
    return <></>;
  };

  const showContentRight = () => {
    if (ContentRight) {
      return ContentRight;
    }
    return <></>;
  };

  return (
    <div className="tw-flex lg:tw-flex-row tw-flex-col tw-justify-center lg:tw-justify-between tw-my-0 lg:tw-my-5">
      <div className="tw-flex tw-flex-col	lg:tw-w-4/12 tw-w-full tw-gap-0 lg:tw-gap-5">
        <div className={`tw-flex tw-h-full tw-justify-${leftPosition}`}>
          {showContentLeft()}
        </div>
        <Divider width="80%" />
      </div>
      <div className="tw-flex tw-flex-col	lg:tw-w-7/12 tw-w-full tw-gap-0 lg:tw-gap-5">
        <div
          className={`tw-flex tw-flex-col tw-justify-${rightPosition} tw-h-full tw-items-center lg:tw-items-start`}
        >
          {showContentRight()}
        </div>
        <Divider width="80%" position="start" />
      </div>
    </div>
  );
}

export default LayoutWrapperContent;
