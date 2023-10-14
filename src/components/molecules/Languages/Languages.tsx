import React, { ReactNode } from "react";
import TitleContent from "@/components/atoms/TitleContent";

import { languagesProps, listLanguagesProps } from "@/interfaces";
import { checkArrayNotEmpty } from "@/utils/helpers";

import LanguagesStyled from "./LanguagesStyled";

function Languages(props: languagesProps) {
  const { title, list } = props;

  const showList = () => {
    if (checkArrayNotEmpty(list)) {
      const show: ReactNode[] = [];
      list.map((value, index) => {
        const { lang, level } = value;
        show.push(
          <div key={index}>
            <span className="tw-font-bold">{lang}</span> - <span>{level}</span>
          </div>
        );
      });
      return <div>{show}</div>;
    } else {
      return null;
    }
  };
  return (
    <LanguagesStyled>
      <div className="tw-mb-4">
        <TitleContent title={title} />
      </div>
      {showList()}
    </LanguagesStyled>
  );
}

Languages.propTypes = {};

export default Languages;
