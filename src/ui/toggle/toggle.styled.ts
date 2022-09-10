import styled from 'styled-components';
import { CircleProps } from './type'

export const ToggleWrapper = styled.span<{ label: string | undefined, onClick?: () => void; }>`
position: relative;
display: inline-flex;
align-items: center;
${({ label }) => label && 'gap: 10px;'}
cursor: pointer;
padding: 8px 0;
user-select: none;
`

export const Input = styled.input`
    position: absolute;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    background: transparent;
`;

export const Circle = styled.span<CircleProps>`
    position: relative;
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${({ theme, toggled }) => toggled ? theme.primaryColor.color : '#fff'};
    box-shadow: 0px 3px 4px ${({ theme }) => theme.mode.name === 'dark' ? '#484848' : '#8d8d8d'};
    position: absolute;
    top: -1.5px;
    left: ${({ toggled }) => toggled ? 20 : 0}px;
    transition: left 0.3s ease;
    &:before, &:after {
        position: absolute;
        height: 40px;
        width: 40px;
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

export const Track = styled.span<{ toggled: boolean; }>`
    display: inline-block;
    width: 40px;
    height: 14px;
    background: ${({ theme, toggled }) => toggled ? theme.primaryColor : theme.mode === 'dark' ? '#f4f9f96b' : '#000000'};
    border-radius: 10px;
    opacity: .5;
`;

export const Label = styled.span`
    color: ${({ theme }) => theme.mode.textColor};
    font-size: 1rem;
`