import styled from 'styled-components';

const DropDownWrapper = styled("div")`
  position: relative;

  & .dropdown-items-container {
    position: absolute;
    right: 0;
    min-width: 120px;
    box-shadow: ${({ theme }) => theme.skin === 'default' && `${theme.mode.name === 'dark' ? '#16182059' : '#24222230'} -1px 2px 1px 0px;`}
    border-radius: 6px;
    content-break: fit;
  }
  
  & .dropdown-item {
    padding: 8px 16px;
    white-space: nowrap;
  }
  & .dropdown-item:hover {
    background: ${({ theme }) => theme.mode.name === 'dark' ? "#6c6c6c24" : "#44444414"};
  }
  & .hide {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    transform: scale(0.8);
    transition: all .1s linear;
  }
  & .show {
    visibility: visible;
    pointer-events: auto!important;
    z-index: 3;
    animation-name: FadeIn;
    animation-duration: .2s;
    transition: all .3s linear;  
  }
  @keyframes FadeIn {
    from {
      opacity: 0.2;
      margin-right: -10px;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      margin-right: 0;
      transform: scale(1);
    }
  }
`;

export default DropDownWrapper;