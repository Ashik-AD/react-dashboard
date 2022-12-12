import styled from 'styled-components'
const StyledAccordion = styled("div")`
display: flex;
flex-direction: column;
width: 100%;
background: ${({ theme }) => theme.color};
overflow-anchor: none;
transition: 300ms;

&:first-of-type {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-top: 0 !important;
}
&.expand {
  border-radius: 6px;
  margin: 16px 0;
  border-color: transparent !important;
  transition: margin 250ms;
}

&:last-of-type {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

&:not(:first-child) {
  border-top: 1px solid
    ${({ theme }) => (theme.name === "dark" ? `#aeaeae24` : `#a1a1a13d`)};
  transition: 200ms;
}

& .accordion__expand_btn_wpr {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  cursor: pointer;
  user-select: none;
  & > .accordion__title_with_icon {
    display: flex;
    align-items: center;
  }
}

& .accordion__details {
  transition: 300ms;
  .accordion__content {
    padding: 0 1rem 1.4rem 1rem;
    transition: 300ms;
  }
}
.accordion__content-visible {
  height: auto;
  overflow: visible;
  visibility: visible;
  transition: height 300ms;
}
.accordion__content-hide {
  height: 0px;
  overflow: hidden;
  transition: height 300ms, minHeight 300ms;
}

& .accordion__icon-indicator {
  transition: 250ms;

  &.rotate {
    transform: rotate(180deg);
    transition: transform 250ms;
  }
}
`;
export default StyledAccordion