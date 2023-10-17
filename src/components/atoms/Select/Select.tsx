import React from "react";
import { selectProps, handleOnChangeLanguageFunc } from "@/interfaces";

import SelectStyled from "./SelectStyled";

const Select = (props: selectProps) => {
  const {
    options = [],
    onChange = () => {},
    defaultValue = "",
    className = "",
  } = props;

  const handleOnChange: handleOnChangeLanguageFunc = (value) => {
    if (onChange) {
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
