import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface CellComponentProps {
  isActive: boolean;
}

const CellBaseStyle = css`
  width: 10px;
  height: 10px;
  margin: 1px;
  border: 1px solid grey;
  color: grey;
`;

const CellActiveStyle = css`
  background-color: grey;
`;

export const CellComponent = styled.div<CellComponentProps>`
  ${CellBaseStyle};
  ${({ isActive }) => isActive && CellActiveStyle}
`;
