import styled from 'styled-components'
import type { StyledProps } from './type'
const StyledDataGrid = styled("div") <StyledProps>`
    width: ${({ width }) => width ? width : "100%"};
    padding: 20px 0px;
    & .data_grid {
        .data_grid_content {
            width: auto;

            .data_grid_body {
                min-height: 200px;
            }
        }
        overflow-x: auto;
        overflow-y: hidden;
    }
`;

export default StyledDataGrid;