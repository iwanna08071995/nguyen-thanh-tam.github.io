import React from "react";

import { aboutMeprops } from "@/interfaces";
import TitleContent from "@/components/atoms/TitleContent";

import AboutMeStyled from "./AboutMeStyled";

function AboutMe(props: aboutMeprops) {
  const { title, content } = props;
  return (
    <AboutMeStyled>
      <TitleContent title={title} />
      <span className="tw-flex tw-text-center sm:tw-text-left">{content}</span>
    </AboutMeStyled>
  );
}

export default AboutMe;
