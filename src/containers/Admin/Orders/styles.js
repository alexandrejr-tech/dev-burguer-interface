import Select from 'react-select';

import styled from 'styled-components';

import { media } from '../../../styles/media';

export const Container = styled.div`
  ${media.tablet} {
    .orders-table > thead > tr > *:nth-child(2),
    .orders-table > tbody > tr > *:nth-child(2):not([colspan]) {
      display: none;
    }

    .products-table > thead > tr > *:nth-child(3),
    .products-table > tbody > tr > *:nth-child(3) {
      display: none;
    }
  }
`;

export const OrderId = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.darkGray};
  word-break: break-all;
`;

export const ProductImage = styled.img`
  height: 80px;
  padding: 11px;
  border-radius: 16px;

  ${media.tablet} {
    height: 48px;
    padding: 4px;
  }
`;

export const SelectStatus = styled(Select)`
  width: 240px;

  ${media.tablet} {
    width: 150px;
    font-size: 13px;
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;

  ${media.laptop} {
    justify-content: flex-start;
    gap: 24px;
    margin: 0 0 20px;
    padding-bottom: 8px;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.purple : props.theme.darkGray};
  border-bottom: ${(props) =>
    props.$isActiveStatus ? `1px solid ${props.theme.purple}` : 'none'};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
  white-space: nowrap;

  ${media.mobile} {
    font-size: 15px;
  }
`;
