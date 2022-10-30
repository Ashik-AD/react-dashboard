import styled from 'styled-components'
import { StyledProps } from './type'
const StyledDataGrid = styled("div") <StyledProps>`
    width: ${({ width }) => width ? width : "100%"};
    padding: 20px 0px;
    
    & .data_grid_body {
        overflow-x: hidden;
    }
`;

export default StyledDataGrid;