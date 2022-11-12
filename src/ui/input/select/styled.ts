import styled from 'styled-components'
import genColorShades from '../../../utils/genColorShades';
import { Input, InputWrapper } from '../text-field/styled';

const StyledSelectWrapper = styled(InputWrapper) <{ width?: string; containerWidth?: string }>`
    position: relative;
    width: ${({ containerWidth }) => containerWidth ? containerWidth : 'auto'};
    min-width: 0px;//${({ containerWidth }) => containerWidth || '100%'};
    cursor: pointer;

    & .select-status-arrow {
        position: absolute;
        top: ${({ sizes }) => sizes === 'small' ? 7 : 15}px;
        right: ${({ sizes }) => sizes === 'small' ? 3 : 10}px;
        font-size: ${({ sizes }) => sizes === 'small' ? 25 : 30}px;
        opacity: 0.6;
    }
    
    & .rotateDown {
        transform: rotate(0deg);
        transition: 0.3s all ease;
    }

    & .rotateUp {
        transform: rotate(-180deg);
        transition: 0.2s all ease;
    }

    & .select-list-container {
        position: absolute;
        background: ${({ theme }) => theme.mode.foreground};
        min-width: ${({ width }) => width ? width : '100px'};
        border-radius: 6px;
        box-shadow: ${({ theme }) => theme.mode.name === 'dark' ? '#0f10146e' : "#dddddd73"} 0px 3px 7px 1px;
        top: 100%;
        left:0;
        padding: 2px 0;
        transform: scale(.9);
        filter: blur(1px);
        pointer-events:none;
        visibility: hidden;
        transtion: all 0.2s linear;
        overflow: hidden;
        z-index: 1500;
    }

    & .show-select-item {
        visibility: visible;
        transform: scale(1);
        filter:blur(0);
        pointer-events:auto;
        transition: all .2s linear;
        z-index: 3;
    }

    .select-option-item {
        position: relative;
        padding: ${({ sizes }) => sizes === 'small' ? '6px' : '8px'} 12px;
        cursor: pointer;
        text-transform: capitalize;
        z-index: 2;
    }

    .select-option-item:hover {
        background: ${({ theme }) => theme.mode.name === 'dark' ? '#ffffff1c' : '#9393931c'};
    }

    .selected-item {
        background: ${({ theme }) => genColorShades(theme.primaryColor.color, { total: 1, intensity: 2 })};
    }

}`;
export const StyledSelectButton = styled(Input) <{ width?: string }>`
    height: ${({ sizes }) => sizes === 'small' ? "46px" : "56px"};
    width:${({ width }) => width ? width : "100%"};
    text-transform: capitalize;
    cursor: pointer;
`;
export default StyledSelectWrapper