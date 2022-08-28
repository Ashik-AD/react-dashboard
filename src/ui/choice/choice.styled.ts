import styled from 'styled-components';
import { ChoiceCircleProps, DotProps } from './type';

export const ChoiceWrapper = styled.span`
    display: inline-flex;
    cursor: pointer;
    gap: 10px;
    align-items: center;
`
export const ChoiceCircle = styled.span<ChoiceCircleProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    background: transparent;
    border: 2px solid ${({ theme, selected }) => selected ? theme.primaryColor.color : theme.mode.textColor};
    border-radius: 50%;
`
export const Dot = styled.span<DotProps>`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${({ theme, selected }) => selected ? theme.primaryColor.color : theme.mode.textColor};
    transform: ${({ selected }) => selected ? `scale(1)` : `scale(0)`};
    transition: transform .3s ease;
`