import styled from 'styled-components'
import DividerProps from './type';

const Div = styled("div") <DividerProps>`
  position: relative;
  height: 0.5px;
  width: 100%;
  ${({ vertical }) => vertical && `width: 1px; 
  min-height: 0px; 
  height: 100%;`}
  background: ${({ theme }) => theme.mode.name === "dark" ? "rgb(255 255 255 / 12%)" : "rgb(0 0 0 / 12%)"};
  margin: 0px auto;
`;
export default Div
