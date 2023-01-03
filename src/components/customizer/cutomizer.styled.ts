import styled from 'styled-components';

const CustomizerBody = styled("div") <{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.foreground};
  max-height: 100%;
  min-height: 100%;
  position: fixed;
  min-width: 290px;
  width: 100%;
  top: 0;
  right: ${({ visible }) => (visible ? 0 : "-410px")};
  box-shadow: -6px 1px 9px 0px #0000001a;
  transition: right 0.2s ease-in;
  z-index: 2;

  @media (min-width: 900px){
    width: 400px;
  }

  & .customizer-body {
    overflow-y: scroll;
  }

  & ::-webkit-scrollbar {
    width: 8px;
  }

  & ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
    transition: all 0.3s linear;
  }

  &:hover ::-webkit-scrollbar-thumb {
    background: #83838380;
    transition: all 0.3s linear;
  }
`;

export const CustomizerToggle = styled('div')`
    display: flex;
    position: fixed;
    right: -10px;
    top: 50%;
    background: ${({ theme }) => theme.color};
    padding: 8px 16px 8px 8px;
    border-radius: 8px;
    cursor: pointer;
    z-index: 1000;
`

export default CustomizerBody;