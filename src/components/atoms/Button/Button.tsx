import React from "react";

import { buttonProps } from "@/interfaces";
import ButtonStyled from "./ButtonStyled";

const Button: React.FC<buttonProps> = ({ children = <></>, ...rest }) => {
  return (
    <ButtonStyled
      className="tw-flex tw-justify-items-center tw-items-center"
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
