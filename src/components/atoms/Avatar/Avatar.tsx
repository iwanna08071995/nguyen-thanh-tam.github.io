import React from "react";

import { AvatarProps } from "@/interfaces";
import AvatarStyled from "./AvatarStyled";
function Avatar({ size = 128, src, ...rest }: AvatarProps) {
  return <AvatarStyled size={size} src={src} {...rest} />;
}

export default Avatar;
