import React, { useEffect, useState } from "react";

import TitleContent from "@/components/atoms/TitleContent";

import { skillsListProps } from "@/interfaces";
import { checkArrayNotEmpty } from "@/utils/helpers";

import SkillsListStyled from "./SkillsListStyled";

function SkillsList(props: skillsListProps) {
  const { title, content } = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const showLists = () => {
    if (checkArrayNotEmpty(content)) {
      const contentConvert = content.join(", ");
      return <span>{`${contentConvert}`}</span>;
    } else {
      return null;
    }
  };

  return (
    <SkillsListStyled>
      <TitleContent title={title} />
      {isLoading ? (
        <div className="tw-flex tw-gap-2">- {showLists()}</div>
      ) : (
        <></>
      )}
    </SkillsListStyled>
  );
}

export default SkillsList;
