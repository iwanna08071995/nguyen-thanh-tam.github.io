import React from "react";

import { aboutMeprops } from "@/interfaces";
import TitleContent from "@/components/atoms/TitleContent";

import AboutMeStyled from "./AboutMeStyled";

function AboutMe(props: aboutMeprops) {
  const { title, content } = props;
  return (
    <AboutMeStyled>
      <TitleContent title={title} />
      <span>{content}</span>
    </AboutMeStyled>
  );
}

export default AboutMe;
