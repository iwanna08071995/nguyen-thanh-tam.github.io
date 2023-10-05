import React from "react";

import Avatar from "../../atoms/Avatar";
import LayoutWrapperContent from "@/components/templates/LayoutWrapperContent";
import Info from "@/components/molecules/Info";
import { MainProps } from "@/interfaces";

import MainStyled from "./MainStyled";

function Main(props: MainProps) {
  const {
    profile: {
      avatar: { size, src },
      name,
      job,
      location,
    },
  } = props;

  return (
    <MainStyled className="tw-flex tw-justify-between lg:tw-container lg:tw-mx-auto tw-px-4">
      <LayoutWrapperContent
        ContentLeft={<Avatar src={src} size={size} />}
        ContentRight={<Info name={name} job={job} location={location} />}
      />
    </MainStyled>
  );
}

Main.propTypes = {};

export default Main;
