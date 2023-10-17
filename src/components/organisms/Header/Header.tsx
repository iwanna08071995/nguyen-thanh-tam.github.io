import React from "react";

import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";
import SwitchDarkMode from "@/components/molecules/SwitchDarkMode";
import ButtonExportPDF from "@/components/molecules/ButtonExportPDF";

import { headerProps, handleOnChangeLanguageFunc } from "@/interfaces";
import StyledHeader from "./HeaderStyled";

const Header = (props: headerProps) => {
  const { listLanguage, onChangeLanguage } = props;

  const handleOchangeLanguage: handleOnChangeLanguageFunc = (lang) => {
    if (onChangeLanguage) {
      onChangeLanguage(lang);
    }
  };

  return (
    <StyledHeader className="tw-m-0.5">
      <div className="tw-flex tw-justify-end tw-items-center tw-gap-4">
        <SwitchDarkMode />
        <LanguageSwitcher
          options={listLanguage}
          onChange={handleOchangeLanguage}
        />
        <ButtonExportPDF />
      </div>
    </StyledHeader>
  );
};

export default Header;
