import React from "react";

import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";
import SwitchDarkMode from "@/components/molecules/SwitchDarkMode";
import ButtonExportPDF from "@/components/molecules/ButtonExportPDF";

import {
  headerProps,
  handleOnChangeLanguageFunc,
  handleOnChangeDarkModeFunc,
} from "@/interfaces";
import StyledHeader from "./HeaderStyled";

const Header = (props: headerProps) => {
  const { listLanguage, onChangeLanguage, onChangeDarkMode } = props;

  const handleOnChangeLanguage: handleOnChangeLanguageFunc = (lang) => {
    if (onChangeLanguage) {
      onChangeLanguage(lang);
    }
  };

  const handleOnChangeDarkMode: handleOnChangeDarkModeFunc = (mode) => {
    if (onChangeDarkMode) {
      onChangeDarkMode(mode);
    }
  };

  return (
    <StyledHeader className="tw-m-0.5">
      <div className="tw-flex tw-justify-end tw-items-center tw-gap-4">
        <SwitchDarkMode onChange={handleOnChangeDarkMode} />
        <LanguageSwitcher
          options={listLanguage}
          onChange={handleOnChangeLanguage}
        />
        <ButtonExportPDF />
      </div>
    </StyledHeader>
  );
};

export default Header;
