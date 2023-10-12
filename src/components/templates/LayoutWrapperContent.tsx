import React from "react";

import Divider from "@/components/atoms/Divider";
import { layoutWrapperContentProps } from "@/interfaces";

function LayoutWrapperContent(props: layoutWrapperContentProps) {
  const { ContentLeft, ContentRight, leftPosition = "left" } = props;

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
    <div className="tw-flex tw-justify-between tw-my-5">
      <div className="tw-flex tw-flex-col	tw-w-4/12 tw-gap-5">
        <div className={`tw-flex tw-h-full tw-justify-${leftPosition}`}>
          {showContentLeft()}
        </div>
        <Divider width="80%" />
      </div>
      <div className="tw-flex tw-flex-col	tw-w-7/12 tw-gap-5">
        <div className="tw-flex tw-flex-col tw-justify-center tw-h-full tw-items-start">
          {showContentRight()}
        </div>
        <Divider width="80%" position="start" />
      </div>
    </div>
  );
}

export default LayoutWrapperContent;
