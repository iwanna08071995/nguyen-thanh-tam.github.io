import React from "react";

import { titleContentProps } from "@/interfaces";

import TitleContentStyled from "./TitleContentStyled";

function TitleContent(props: titleContentProps) {
  const { title } = props;
  return (
    <TitleContentStyled className="tw-font-semibold		 tw-text-2xl">
      {title}
    </TitleContentStyled>
  );
}

export default TitleContent;
