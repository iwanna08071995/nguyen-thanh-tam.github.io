import React from "react";

import { ButtonProps } from "@/interfaces";
import ButtonStyled from "./ButtonStyled";

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <ButtonStyled>{children}</ButtonStyled>;
};

Button.defaultProps = {
  children: <></>,
};

export default Button;
