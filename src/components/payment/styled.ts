import styled from "styled-components";

const StyledPaymentCard = styled("div")`
  position: relative;
  width: 290px;
  height: 180px;
  perspective: 1000px;

  & > .card__content {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 3px solid ${({ theme }) => theme.color};
    border-radius: 1rem;
    transform-style: preserve-3d;
    transition: all 400ms linear;
  }
  .flip__card {
    transform: rotateY(180deg);
  }

  .payment__card-front,
  .payment__card-back {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    background-color: #e1e1e11f;
    backdrop-filter: blur(2px);
    border-radius: 1rem;
    overflow: hidden;
    backface-visibility: hidden;
  }
  .payment__card-back {
    transform: rotateY(180deg);
  }
  .card-pin {
    font-family: Consolas, Courier, monospace;
    letter-spacing: 1.25px;
    text-align-last: justify;
  }

  .rebon {
    width: 100%;
    height: 2.8rem;
    background: ${({ theme }) => theme.color};
    margin-top: 0.8rem;
  }
  .cvc__page {
    position: relative;
    width: 80%;
    height: 36px;
    background: #ffffff96;
    margin-top: 0.6rem;
    margin-left: 0.6rem;
    z-index: 1;

    &:before,
    &:after {
      position: absolute;
      width: 100%;
      height: 1px;
      background: #e1888894;
      content: "";
      top: 25%;
    }
    &:after {
      top: unset;
      bottom: 25%;
    }

    .cvc__number {
      padding-right: 0.6rem;
    }
  }
`;
export default StyledPaymentCard;