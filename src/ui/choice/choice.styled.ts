import styled from 'styled-components';
import { ChoiceCircleProps, DotProps } from './type';

export const Dot = styled.span<DotProps>`
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme, selected }) => selected ? theme.primaryColor.color : theme.mode.textColor};
    transform: ${({ selected }) => selected ? `scale(1)` : `scale(0)`};
    transition: transform .3s ease;
`

export const CirclePlaceholder = styled('span')`
    position: absolute;
    background: ${({ theme }) => theme.primaryColor.color};
    height: 250%;
    width: 250%;
    border-radius: 50%;
    opacity: 0.1;
    visibility: hidden;
`;

export const ChoiceCircle = styled.span<ChoiceCircleProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    background: transparent;
    border: 2px solid ${({ theme, selected }) => selected ? theme.primaryColor.color : theme.mode.textColor};
    border-radius: 50%;

    &:hover ${CirclePlaceholder}{
        visibility: visible;
    }
`

export const ChoiceWrapper = styled.span`
    display: inline-flex;
    cursor: pointer;
    gap: 10px;
    align-items: center;
    padding:8px 0px;
    user-select: none;
`