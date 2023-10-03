import React from "react";

import { HeaderProps } from "@/interfaces";
import StyledHeader from "./HeaderStyled";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";
import SwitchDarkMode from "@/components/molecules/SwitchDarkMode";
import ButtonExportPDF from "@/components/molecules/ButtonExportPDF";

const Header = (props: HeaderProps) => {
  const { listLanguage } = props;
  return (
    <StyledHeader className="tw-m-0.5">
      <div className="tw-flex tw-justify-end tw-items-center tw-gap-4">
        <SwitchDarkMode />
        <LanguageSwitcher options={listLanguage} />
        <ButtonExportPDF />
      </div>
    </StyledHeader>
  );
};

export default Header;

{
  /* <div className="tw-flex tw-justify-between lg:tw-container lg:tw-mx-auto tw-px-4">
123
</div> */
}
