import styled from 'styled-components'
import DividerProps from './type';

const Div = styled("hr") <DividerProps>`
  border-width: 0px 0px thin;
  border-style: solid;
  ${({ vertical }) => vertical && `height: 100%;`}
  border-color: ${({ theme }) =>
        theme.mode.name === "dark" ? "rgb(255 255 255 / 12%)" : "rgb(0 0 0 / 12%)"};
`;
export default Div