import React from "react";

import Select from "../../atoms/Select";
import { FlagVi, FlagEn } from "@/components/atoms/Image";
import { checkArrayNotEmpty } from "@/utils/helpers";
import { LANGUAGES } from "@/utils/constant";
import {
  languageSwitcherProps,
  handleOnChangeLanguageFunc,
} from "@/interfaces";
import i18n from "../../../lib/i18n";

import LanguageSwitcherStyled from "./LanguageSwitcherStyled";

const { EN, VI } = LANGUAGES;

function LanguageSwitcher(props: languageSwitcherProps) {
  const { options, onChange } = props;

  const checkShowFlag = (key: string) => {
    switch (key) {
      case VI:
        return <FlagVi size={32} />;
      case EN:
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

      return list;
    }

    return [];
  };

  const handleShowDefaultValue = () => {
    return i18n.language;
  };

  const handleOnChange: handleOnChangeLanguageFunc = (lang) => {
    if (onChange) {
      onChange(lang);
    }
  };

  return (
    <LanguageSwitcherStyled className="tw-flex">
      <Select
        className="tw-w-16"
        options={handleShowListOptions()}
        defaultValue={handleShowDefaultValue()}
        onChange={handleOnChange}
      />
    </LanguageSwitcherStyled>
  );
}

export default LanguageSwitcher;
