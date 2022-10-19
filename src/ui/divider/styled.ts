import styled from 'styled-components'
import DividerProps from './type';

const Div = styled("div") <DividerProps>`
  height: 0.5px;
  ${({ horizontal }) => horizontal && `width: 1px; 
  min-height: 0px; 
  height: 100%;`}
  background: ${({ theme }) => theme.mode.name === "dark" ? "rgb(255 255 255 / 12%)" : "rgb(0 0 0 / 12%)"};
`;
export default Div