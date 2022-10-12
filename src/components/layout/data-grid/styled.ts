import styled from 'styled-components'
import { StyledProps } from './type'
const StyledDataGrid = styled("div") <StyledProps>`
width: ${({ width }) => width ? width : "100%"};
padding: 20px 0px;
overflow-x: auto;
.data_grid_body {
    height: ${({ height }) => height ? height : "100%"};
}
`;

export default StyledDataGrid;