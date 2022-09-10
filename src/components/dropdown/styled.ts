import styled from 'styled-components';

const DropDownWrapper = styled("div")`
  position: relative;

  & .dropdown-items-container {
    position: absolute;
    right: 0;
    min-width: 120px;
    display: none;
    pointer-events: none;
    z-index: -3;
    transition: all .3s linear;
    box-shadow: ${({ theme }) => theme.skin === 'default' && `${theme.mode.name === 'dark' ? '#030b324f' : '#24222230'} 0 2px 12px 2px;`}
  }

  & .dropdown-item {
    padding: 8px 0;
  }
  & .show {
    display: block;
    pointer-events: auto;
    z-index: 2;
  }

`;

export default DropDownWrapper;