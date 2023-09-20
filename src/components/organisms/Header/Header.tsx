import React from "react";

import StyledHeader from "./HeaderStyled";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <StyledHeader className="tw-p-4">
      <div className="tw-flex tw-justify-between lg:tw-container lg:tw-mx-auto tw-px-4">
        123
      </div>
    </StyledHeader>
  );
};

export default Header;
