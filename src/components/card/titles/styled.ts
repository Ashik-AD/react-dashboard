import styled from 'styled-components'
import Box from '../../box/Box'

const CardHeaderTitle = styled(Box)`
    & .card-header-title {
        font-size: 1.25rem;
        line-height: 1;
        font-weight: 500;
        letter-spacing: 0.00125rem;
        text-transform: capitalize;
    }

    & .current-action-dropdown {
        position: absolute;
        right: 0px;
        min-width: 100px;
        z-index: -1;
        opacity: 0;
        pointer-events: none;
        transition: right 0.3s, opacity: .2s;
    }

   button:focus-within ~ .current-action-dropdown {
        right: 0px;
        z-index: 1!important;
        opacity: 1!important;
        pointer-events: auto;
        transition: all .3s ease;
    }
`
export default CardHeaderTitle