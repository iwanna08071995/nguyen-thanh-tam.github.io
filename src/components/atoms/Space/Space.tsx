import React, { ReactNode } from "react";
import { Space as AntdSpace } from "antd";

interface SpaceProps {
  size?: "large" | "middle" | "small";
  children: ReactNode;
}

const Space: React.FC<SpaceProps> = ({ size = "small", children, ...rest }) => {
  return (
    <AntdSpace {...rest} size={size}>
      {children}
    </AntdSpace>
  );
};

export default Space;
