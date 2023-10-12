import React from "react";

import { avatarProps } from "@/interfaces";
import AvatarStyled from "./AvatarStyled";
function Avatar({ size = 128, src, ...rest }: avatarProps) {
  return <AvatarStyled size={size} src={src} {...rest} />;
}

export default Avatar;
