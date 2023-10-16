import React from "react";

import { titleContentProps } from "@/interfaces";

import TitleContentStyled from "./TitleContentStyled";

function TitleContent(props: titleContentProps) {
  const { title } = props;
  return (
    <div className="tw-mb-4 tw-flex tw-justify-center lg:tw-justify-start">
      <TitleContentStyled className="tw-font-semibold tw-text-2xl">
        {title}
      </TitleContentStyled>
    </div>
  );
}

export default TitleContent;
