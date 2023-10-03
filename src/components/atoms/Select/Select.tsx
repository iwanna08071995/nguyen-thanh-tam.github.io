import React from "react";

import { SelectProps } from "@/interfaces";

import SelectStyled from "./SelectStyled";

const Select = (props: SelectProps) => {
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
