import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { media } from '../../styles/media';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;

  ${media.mobile} {
    padding: 0 16px;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  padding: 0 60px;

  .carousel-item {
    padding: 0 10px;
  }

  ${media.tablet} {
    padding: 0 36px;

    .carousel-item {
      padding: 0 6px;
    }
  }

  ${media.mobile} {
    padding: 0;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${(props) => props.theme.purple};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  padding-top: 40px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
  }

  ${media.mobile} {
    font-size: 24px;
    padding-top: 32px;
    margin-bottom: 24px;
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.$imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 12px;

  display: flex;
  align-items: flex-end;
  padding: 20px;
  width: 100%;
  height: 225px;

  ${media.tablet} {
    height: 180px;
    padding: 14px;
  }

  ${media.mobile} {
    height: 160px;
  }
`;

export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.6);
  padding: 6px 24px;
  border-radius: 30px;
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  ${media.tablet} {
    font-size: 16px;
    padding: 6px 16px;
  }
`;
