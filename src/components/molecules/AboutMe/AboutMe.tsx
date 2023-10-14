import React from "react";

import { aboutMeprops } from "@/interfaces";
import TitleContent from "@/components/atoms/TitleContent";

import AboutMeStyled from "./AboutMeStyled";

function AboutMe(props: aboutMeprops) {
  const { title, content } = props;
  return (
    <AboutMeStyled>
      <div className="tw-mb-4">
        <TitleContent title={title} />
      </div>
      <span>{content}</span>
    </AboutMeStyled>
  );
}

export default AboutMe;
