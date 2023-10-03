import React from "react";

import Select from "../../atoms/Select";
import { LanguageSwitcherProps } from "@/interfaces";
import { FlagVi, FlagEn } from "@/components/atoms/Image";
import { checkArrayNotEmpty } from "@/utils/helpers";

import LanguageSwitcherStyled from "./LanguageSwitcherStyled";

function LanguageSwitcher(props: LanguageSwitcherProps) {
  const { options } = props;

  const checkShowFlag = (key: string) => {
    switch (key) {
      case "vi":
        return <FlagVi size={32} />;

      case "en":
        return <FlagEn size={32} />;
      default:
        break;
    }
  };

  const handleShowListOptions = () => {
    if (checkArrayNotEmpty(options)) {
      const list = options.map((value: string, key: number) => {
        return {
          key,
          value,
          label: checkShowFlag(value),
        };
      });

      console.log("list", list);

      return list;
    }

    return [];
  };

  const handleShowDefaultValue = () => {
    if (checkArrayNotEmpty(options)) {
      return options[0];
    }

    return "";
  };

  return (
    <LanguageSwitcherStyled className="tw-flex">
      <Select
        className="tw-w-16"
        options={handleShowListOptions()}
        defaultValue={handleShowDefaultValue()}
      />
    </LanguageSwitcherStyled>
  );
}

LanguageSwitcher.defaultProps = {};

export default LanguageSwitcher;
