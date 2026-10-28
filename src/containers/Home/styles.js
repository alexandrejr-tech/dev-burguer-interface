import styled from 'styled-components';

import Background from '../../assets/background.svg';
import BannerHome from '../../assets/banner-home.svg';
import { media } from '../../styles/media';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;
  position: relative;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    position: absolute;
    right: 20%;
    top: 5%;
  }

  ${media.tablet} {
    height: 320px;

    h1 {
      font-size: 56px;
      right: 8%;
    }
  }

  ${media.mobile} {
    height: 220px;

    h1 {
      font-size: 40px;
      right: 50%;
      transform: translateX(50%);
      white-space: nowrap;
    }
  }
`;

export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${Background}');
  height: 100%;
`;
