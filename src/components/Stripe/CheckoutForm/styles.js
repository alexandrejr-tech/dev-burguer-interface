import styled from 'styled-components';

import { media } from '../../../styles/media';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 40px;

  ${media.laptop} {
    padding: 32px 24px;
  }

  ${media.mobile} {
    padding: 24px 12px;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;

  .title {
    width: 100%;
    padding: 13px;
    background-color: ${(props) => props.theme.secondBlack};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: ${(props) => props.theme.white};
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    color: ${(props) => props.theme.secondBlack};
    font-weight: 500;
    line-height: 1.5;
  }

  strong {
    font-weight: 700;
  }

  .card-number {
    white-space: nowrap;
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .spinner {
    color: ${(props) => props.theme.white};
  }

  .spinner:before,
  .spinner:after {
    background: ${(props) => props.theme.purple};
  }

  #payment-element {
    margin-bottom: 12px;
  }

  #payment-message {
    color: ${(props) => props.theme.darkRed};
    font-size: 16px;
    text-align: center;
  }

  ${media.mobile} {
    .title {
      font-size: 18px;
    }

    .content {
      padding: 16px;
      font-size: 14px;
    }
  }
`;

export const PaymentMethodsNote = styled.p`
  width: 100%;
  max-width: 600px;
  color: ${(props) => props.theme.gray};
  font-size: 14px;
  text-align: center;

  a {
    color: ${(props) => props.theme.purple};
    font-weight: 600;
    text-decoration: underline;
  }
`;
