import React from "react";

import { skillsSummaryProps } from "@/interfaces";
import TitleContent from "@/components/atoms/TitleContent";
import Lists from "@/components/atoms/Lists";

import SkillsSummaryStyled from "./SkillsSummaryStyled";

function SkillsSummary(props: skillsSummaryProps) {
  const { title, content } = props;

  return (
    <SkillsSummaryStyled>
      <TitleContent title={title} />
      <Lists content={content} />
    </SkillsSummaryStyled>
  );
}

export default SkillsSummary;
