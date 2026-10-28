import styled from 'styled-components';

import { media } from '../../styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 70px 20px 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.white};
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
  position: relative;
  width: 100%;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;

    p {
      font-size: 18px;
      color: ${(props) => props.theme.orange};
      line-height: 22px;
      font-weight: 700;
    }

    strong {
      font-size: 20px;
      color: ${(props) => props.theme.black};
      font-weight: 800;
      line-height: 24px;
    }
  }

  ${media.mobile} {
    gap: 12px;
    padding: 56px 14px 14px;
    border-radius: 16px;

    div {
      p {
        font-size: 15px;
        line-height: 19px;
      }

      strong {
        font-size: 17px;
        line-height: 21px;
      }
    }
  }
`;

export const CardImage = styled.img`
  height: 110px;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);

  ${media.mobile} {
    height: 90px;
    top: -40px;
  }
`;

export const FavoriteIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  color: ${(props) => props.theme.purple};

  ${media.mobile} {
    top: 14px;
    right: 14px;
  }
`;
