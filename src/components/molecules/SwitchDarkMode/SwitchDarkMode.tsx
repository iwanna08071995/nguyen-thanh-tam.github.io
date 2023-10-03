import React from "react";
import { CiLight, CiDark } from "react-icons/ci";

import { SwitchDarkModeProps } from "@/interfaces";
import { LIST_MODE_DARK_LIGHT } from "@/utils/constant";

import SwitchDarkModeStyled from "./SwitchDarkModeStyled";
import Button from "@/components/atoms/Button";

const { DARK, LIGHT } = LIST_MODE_DARK_LIGHT;

function SwitchDarkMode(props: SwitchDarkModeProps) {
  const { size, mode } = props;

  const checkShowModeSystem = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    const darkModeStartHour = 19; // 7:00 PM
    const darkModeEndHour = 6; // 6:59 AM

    if (currentHour >= darkModeStartHour || currentHour < darkModeEndHour) {
      return <CiDark size={size} />;
    } else {
      return <CiLight size={size} />;
    }
  };

  const showMode = () => {
    switch (mode) {
      case DARK:
        return <CiDark size={size} />;
      default:
        return <CiLight size={size} />;
    }
  };

  return (
    <SwitchDarkModeStyled>
      <Button type="text">{showMode()}</Button>
    </SwitchDarkModeStyled>
  );
}

SwitchDarkMode.defaultProps = {
  size: "1.6rem",
  mode: LIGHT,
};

export default SwitchDarkMode;
