import React from "react";

import { TitleContentProps } from "@/interfaces";

import TitleContentStyled from "./TitleContentStyled";

function TitleContent(props: TitleContentProps) {
  const { title } = props;
  return (
    <TitleContentStyled className="tw-font-medium	 tw-text-2xl">
      {title}
    </TitleContentStyled>
  );
}

export default TitleContent;
