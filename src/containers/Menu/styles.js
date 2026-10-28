import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Background from '../../assets/background.svg';
import BannerHamburguer from '../../assets/banner-hamburguer.svg';
import { media } from '../../styles/media';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};

  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${Background}');
  height: 100%;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;

  background: url('${BannerHamburguer}') no-repeat;
  background-color: ${(props) => props.theme.mainBlack};
  background-position: center;
  background-size: cover;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 60px;
    color: ${(props) => props.theme.white};
    position: absolute;

    right: 20%;
    top: 30%;

    span {
      display: block;
      color: ${(props) => props.theme.white};
      font-size: 20px;
    }
  }

  ${media.tablet} {
    height: 320px;

    h1 {
      font-size: 56px;
      line-height: 44px;
      right: 8%;
      top: 25%;

      span {
        font-size: 16px;
      }
    }
  }

  ${media.mobile} {
    height: 240px;

    h1 {
      font-size: 40px;
      line-height: 32px;
      right: 16px;
      top: 22%;

      span {
        font-size: 12px;
        margin-top: 4px;
      }
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;

  ${media.tablet} {
    justify-content: flex-start;
    gap: 24px;
    padding: 0 16px 8px;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.$isActiveCategory ? props.theme.purple : props.theme.gray};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveCategory ? `3px solid ${props.theme.purple}` : 'none'};
  white-space: nowrap;

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.mobile} {
    font-size: 16px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;

  ${media.laptop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 32px;
  }

  ${media.mobile} {
    padding: 16px;
    gap: 56px 12px;
    margin-top: 40px;
  }
`;
