import React, { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

import { switchDarkModeProps } from "@/interfaces";
import { MODE_DARK_LIGHT } from "@/utils/constant";

import SwitchDarkModeStyled from "./SwitchDarkModeStyled";
import Button from "@/components/atoms/Button";

const { DARK, LIGHT } = MODE_DARK_LIGHT;

function SwitchDarkMode(props: switchDarkModeProps) {
  const { size = "1.6rem", onChange } = props;
  const [modeDark, setModeDark] = useState(LIGHT);

  useEffect(() => {
    const checkShowModeSystem = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      const darkModeStartHour = 19; // 7:00 PM
      const darkModeEndHour = 6; // 6:59 AM

      if (currentHour >= darkModeStartHour || currentHour < darkModeEndHour) {
        setModeDark(DARK);
      } else {
        setModeDark(LIGHT);
      }
    };

    checkShowModeSystem();
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(modeDark);
    }
  }, [modeDark]);

  const handleOnChangeMode = () => {
    setModeDark(!modeDark);
  };

  const showMode = () => {
    if (modeDark) {
      return <CiDark size={size} />;
    }
    return <CiLight size={size} />;
  };

  return (
    <SwitchDarkModeStyled>
      <Button type="text" onClick={handleOnChangeMode}>
        {showMode()}
      </Button>
    </SwitchDarkModeStyled>
  );
}

export default SwitchDarkMode;
