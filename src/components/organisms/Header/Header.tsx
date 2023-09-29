import React from "react";

import { HeaderProps } from "@/interfaces";
import StyledHeader from "./HeaderStyled";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";

const Header = (props: HeaderProps) => {
  const { listLanguage } = props;
  return (
    <StyledHeader className="tw-m-2">
      <div className="tw-flex tw-justify-end">
        <div>
          <LanguageSwitcher options={listLanguage} />
        </div>
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
