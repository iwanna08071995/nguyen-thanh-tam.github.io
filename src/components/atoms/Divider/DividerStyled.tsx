import styled from "styled-components";

import { DividerProps } from "@/interfaces";

const DividerStyled = styled.div<DividerProps>`
  hr {
    border-top: solid #ccc 1px;
    width: ${(props) => (props.width ? props.width : "100%")};
  }
`;

export default DividerStyled;
