import React from "react";

import { InfoProps } from "@/interfaces";

function Info(props: InfoProps) {
  const { location = "", job = "", name = "" } = props;
  return (
    <>
      <span className="tw-text-lg tw-font-semibold">{name}</span>
      <span className="tw-font-medium">{job}</span>
      <span className="tw-text-sm tw-font-light tw-mt-2">{location}</span>
    </>
  );
}

export default Info;
