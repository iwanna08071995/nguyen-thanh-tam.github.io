import React from "react";
import { Button as ButtonAnt } from "antd";

import { selectProps } from "@/interfaces";

import SelectStyled from "./SelectStyled";

const Select = (props: selectProps) => {
  const {
    options = [],
    onChange = () => {},
    defaultValue = "",
    className = "",
  } = props;

  const handleOnChange = (value: unknown) => {
    if (onChange !== undefined && typeof value === "string") {
      onChange(value);
    }
  };

  return (
    <SelectStyled
      className={className}
      defaultValue={defaultValue}
      onChange={handleOnChange}
      options={options}
      suffixIcon={null}
    />
  );
};

export default Select;
