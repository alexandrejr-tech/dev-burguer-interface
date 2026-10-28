import styled from 'styled-components';

import { media } from '../../styles/media';

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;

  ${media.mobile} {
    th:nth-child(3),
    td:nth-child(3) {
      display: none;
    }

    td[colspan] {
      display: table-cell;
    }
  }
`;

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;

  ${media.tablet} {
    height: 56px;
    width: 56px;
    border-radius: 12px;
  }

  ${media.mobile} {
    height: 44px;
    width: 44px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: ${(props) => props.theme.white};
    border-radius: 4px;
    background-color: ${(props) => props.theme.purple};
    transition: all 0.4s;
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }
  }

  ${media.mobile} {
    gap: 8px;

    button {
      height: 28px;
      width: 28px;
    }
  }
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;
  white-space: nowrap;
`;

export const TrashImage = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
