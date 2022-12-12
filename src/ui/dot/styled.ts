import styled from 'styled-components'
import { alertColor, Colors } from '../color/alert';
import DotProps from './type';
const UiDot = styled("div") <DotProps>`
  position: relative;
  height: ${({ size }) =>
    size ? (size === "small" ? 12 : size === "large" && 24) : 15}px;
  width: ${({ size }) =>
    size ? (size === "small" ? 12 : size === "large" && 24) : 15}px;
  ${({ outlined, outlineColor, theme }) =>
    outlined &&
    `border: 2px solid ${outlineColor ? outlineColor : theme.primaryColor.color};`}
  background: ${({ skin, theme, color }) =>
    !skin ? (color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.primaryColor.color) : "transparent"};

  border-radius: ${({ varient }) =>
    varient === "rectangle" ? 2 : varient === "rounded" ? "10%" : "50%"};

  overflow: hidden;
`;
export default UiDot;