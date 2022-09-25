import styled from "styled-components";
import { ButtonType, IconButtonProps } from ".";
import { alertColor, Colors } from "../color/alert";

const normalButton = styled.button<ButtonType>`
  //background color
  background-color: ${props => props.varient === 'text' || props.varient === 'outlined' ? 'transparent' : (props.color ? alertColor[props.color as keyof Colors] : (props.color ? alertColor[props.color as keyof Colors] : props.theme.primaryColor.color))};
  // border
  border: 1.8px solid ${props => props.varient === 'outlined' ? (props.color ? alertColor[props.color as keyof Colors] : props.theme.primaryColor.color) : 'transparent'};
  text-align: center;
  justify-content: center;
  // color
  color: ${({ theme, color, varient }) => varient === 'outlined' || varient === 'text' ? color ? alertColor[color as keyof Colors] : theme.primaryColor.color : "#fff"};
  font-size: 0.875rem;
  font-weight: 500;
`;
export default normalButton;

export const iconButton = styled(normalButton) <IconButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ roundness }) => roundness === 'rounded' ? '0.5rem' : roundness === 'square' ? '0.1499rem' : '50%'};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  height: ${({ size }) => size ? size : 32}px;
  min-width: auto;
  width: ${({ size }) => size ? size : 32}px;
  color: ${({ theme, color }) => color ? color : theme.mode.textColor};
  padding: 0px;
  border: ${({ varient }) => varient === 'outlined' ? 1.8 : 0}px;
  user-select: none;
  overflow: hidden;
  z-index: 1;

  & svg {
    font-size: ${({ size }) => size ? (((size / 16) * 90) / 100) : '1.5'}rem;
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
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
