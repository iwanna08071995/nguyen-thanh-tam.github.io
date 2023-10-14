import styled from "styled-components";

import { listsStyledProps } from "@/interfaces";

const ListsStyled = styled.ul<listsStyledProps>`
  list-style-type: ${(props) => props.type};
`;

export default ListsStyled;
