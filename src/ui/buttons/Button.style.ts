import styled from "styled-components";
import { ButtonType, IconButtonProps } from ".";
import genColorShades from "../../utils/genColorShades";
import { alertColor, Colors } from "../color/alert";

const skinColor = (color: string) => alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color

const normalButton = styled.button<ButtonType>`
  display: inline-flex;
  // flex: 0 0 auto;
  gap: 8px;
  align-items: center;
  ${({ width }) => width ? `min-width: ${width}; width: ${width};` : ''}
  position: relative;
  background-color: ${({ varient, color, theme }) => (varient === 'text' || varient === 'outlined') ? 'transparent' : color ? skinColor(color) : theme.primaryColor.color};
  box-sizing: border-box;
  // border
  border: 1.8px solid ${({ varient, color, theme }) => varient === 'outlined' ? (color ? skinColor(color) : theme.primaryColor.color) : 'transparent'};
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  // color
  color: ${({ theme, color, varient }) => varient === 'outlined' || varient === 'text' ? color ? skinColor(color) : theme.primaryColor.color : "#fff"};
  font-size: 0.875rem;
  font-weight: 500;
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  overflow: hidden;
  transition: 300ms background ease-out;

  &:hover {
    background: ${({ theme, color, varient }) => varient === 'contained' ? genColorShades(color ? color : theme.primaryColor.color, { total: 1, intensity: 9 }).toString() : genColorShades(color ? color : theme.primaryColor.color, { total: 1, intensity: 2 }).toString()};
    transition: 200ms ease;
  }
`;
export default normalButton;

export const iconButton = styled(normalButton) <IconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ roundness }) => roundness === 'rounded' ? '0.5rem' : roundness === 'square' ? '0.1499rem' : '50%'};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  min-height: ${({ size }) => size ? size : 32}px;
  height: ${({ size }) => size ? size : 32}px;
  min-width: ${({ size }) => size ? `${size}` : 32}px;
  width: ${({ size }) => size ? size : 32}px;
  color: ${({ varient, color }) => color ? color : varient === "contained" ? "#fff" : 'inherit'};
  padding: 0px;
  // border: ${({ varient }) => varient === 'outlined' ? 1.8 : 0}px;
  user-select: none;
  overflow: hidden;
  z-index: 1;

  & svg {
    font-size: ${({ size }) => size ? (((size / 16) * 90) / 100) : '1.5'}rem;
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  }

  & > .icon-button-content {
    opacity: ${({ contentOpacity }) => contentOpacity ? `0.${contentOpacity}` : 1};
  }

 & .hover-layer {
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    content: '';
    background: ${({ theme, color }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.primaryColor.color};
    top: 0;
    left: 0;
    opacity: 0.1;
    z-index: -1;
    visibility: hidden;
  }
  &:hover .hover-layer {
    visibility: visible;
  }
`;
