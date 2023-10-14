import styled from "styled-components";

import { dividerProps } from "@/interfaces";

const DividerStyled = styled.div<dividerProps>`
  hr {
    border-top: solid #ccc 1px;
    width: ${(props) => (props.width ? props.width : "100%")};
  }
`;

export default DividerStyled;
