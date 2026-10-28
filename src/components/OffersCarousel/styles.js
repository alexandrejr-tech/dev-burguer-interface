import styled from 'styled-components';

import { media } from '../../styles/media';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px 40px;

  ${media.mobile} {
    padding: 0 16px 32px;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  padding: 0 60px;

  .carousel-item {
    display: flex;
    padding: 60px 12px 20px;
  }

  ${media.tablet} {
    padding: 0 36px;

    .carousel-item {
      padding: 60px 8px 20px;
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
  color: ${(props) => props.theme.gren};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 60px 0 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.gren};
    left: calc(50% - 28px);
  }

  ${media.mobile} {
    font-size: 24px;
    margin: 40px 0 0;
  }
`;
