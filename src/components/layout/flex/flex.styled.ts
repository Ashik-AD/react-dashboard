import styled from 'styled-components';
import FlexType from './flex-type';
const layoutFlex = styled.div<FlexType>`
    min-width: 0px;
    width: 100%;
    display: flex;

    // direction
    flex-direction: ${props => props.direction};

    // wrap
    flex-wrap: ${props => props.wrap};
    
    // gap
    gap: ${({ gap }) => gap === 'sm' ? '8px' : gap === 'regular' ? '16px' : gap === 'medium' ? '24px' : gap === 'large' ? '36px' : ''};

    // items alignment
    align-items: ${props => props.alignment === 'center' ? 'center' : props.alignment === 'bottom' ? 'flex-end' : 'flex-start'};

    // content alignment
    justify-content: ${props => !props.justify ? 'flex-start' : props.justify === 'center' ? 'center' : props.justify === 'around' ? 'space-around' : props.justify === 'between' ? 'space-between' : 'space-evenly'};
`;
export default layoutFlex;