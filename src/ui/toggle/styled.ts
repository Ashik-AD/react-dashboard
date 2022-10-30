import styled from 'styled-components';
import { ToggleElProps } from './type'

export const ToggleWrapper = styled('div') <{ label: string | undefined, size: 'small' | 'regular' }>`
    position: relative;
    display: inline-flex;
    align-items: center;
    ${({ label, size }) => label && `gap: ${size === 'small' ? 6 : 10}px;`}
    cursor: pointer;
    padding: ${({ size }) => size === 'small' ? 4 : 8}px 0;
    user-select: none;
`

export const Input = styled.input`
    position: absolute;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    background: transparent;
`;

export const Circle = styled('span') <ToggleElProps>`
    position: relative;
    display: block;
    min-height: ${({ size }) => size === 'small' ? 16 : 20}px;
    min-width: ${({ size }) => size === 'small' ? 16 : 20}px;
    max-height: ${({ size }) => size === 'small' ? 16 : 20}px;
    max-width: ${({ size }) => size === 'small' ? 16 : 20}px;
    border-radius: 50%;
    background: ${({ theme, toggled }) => toggled ? theme.primaryColor.color : '#fff'};
    box-shadow: 0px 1.5px 3px ${({ theme }) => theme.mode.name === 'dark' ? '#484848' : '#8d8d8d'};
    position: absolute;
    top: ${({ size }) => size === 'small' ? 3.5 : -0.5}px;
    left: ${({ toggled, size }) => toggled ? size === "small" ? 14 : 20 : 0}px;
    transition: left 0.3s ease;

    &:before, &:after {
        position: absolute;
        min-height: ${({ size }) => size === 'small' ? 25 : 40}px;
        min-width: ${({ size }) => size === 'small' ? 25 : 40}px;
        max-height: ${({ size }) => size === 'small' ? 25 : 40}px;
        max-width: ${({ size }) => size === 'small' ? 25 : 40}px;
        content: '';
        background: ${({ theme }) => theme.primaryColor.color};
        border-radius: 50%;
        opacity: 0.1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        visibility: hidden;
    }

    &:hover:before{
        visibility: visible;
    }
`;

export const Track = styled('span') <ToggleElProps>`
    display: inline-block;
    width: ${({ size }) => size == 'small' ? 30 : 40}px;
    height: ${({ size }) => size === 'small' ? 10 : 14}px;
    background: ${({ theme, toggled }) => toggled ? theme.primaryColor : theme.mode === 'dark' ? '#f4f9f96b' : '#818181'};
    border-radius: 10px;
    opacity: .5;
`;

export const Label = styled('span') <{ size?: "small" | "regular" }>`
    color: ${({ theme }) => theme.mode.textColor};
    font-size: 1rem;
    line-height: 0px;
`