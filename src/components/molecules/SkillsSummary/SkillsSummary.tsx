import React from "react";

import { SkillsSummaryProps } from "@/interfaces";
import TitleContent from "@/components/atoms/TitleContent";
import Lists from "@/components/atoms/Lists";

import SkillsSummaryStyled from "./SkillsSummaryStyled";

function SkillsSummary(props: SkillsSummaryProps) {
  const { title, content } = props;

  return (
    <SkillsSummaryStyled>
      <div className="tw-mb-4">
        <TitleContent title={title} />
      </div>
      <Lists content={content} />
    </SkillsSummaryStyled>
  );
}

export default SkillsSummary;
