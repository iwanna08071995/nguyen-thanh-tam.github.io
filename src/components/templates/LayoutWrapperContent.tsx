import React from "react";

import Divider from "@/components/atoms/Divider";
import { LayoutWrapperContentProps } from "@/interfaces";

function LayoutWrapperContent(props: LayoutWrapperContentProps) {
  const { ContentLeft, ContentRight } = props;

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
    <div className="tw-flex tw-w-full tw-justify-between tw-items-center">
      <div className="tw-flex tw-flex-col	tw-h-full	tw-w-4/12">
        <div className="tw-flex tw-justify-center">{showContentLeft()}</div>
        <Divider width="60%" className="tw-pt-2" />
      </div>
      <div className="tw-flex tw-flex-col	tw-h-full	tw-w-7/12">
        <div className="tw-flex tw-flex-col tw-justify-center tw-h-full tw-items-start">
          {showContentRight()}
        </div>
        <Divider width="60%" position="start" className="tw-pt-2" />
      </div>
    </div>
  );
}

LayoutWrapperContent.propTypes = {};

export default LayoutWrapperContent;
