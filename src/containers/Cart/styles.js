import styled from 'styled-components';

import Background from '../../assets/background.svg';
import Texture from '../../assets/texture.svg';
import { media } from '../../styles/media';

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.secondWhite};
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${Background}');
  min-height: 100vh;
`;

export const Banner = styled.div`
  background: url('${Texture}');
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 180px;

  img {
    height: 130px;
  }

  ${media.mobile} {
    height: 120px;

    img {
      height: 90px;
    }
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: ${(props) => props.theme.gren};
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.gren};
  }

  ${media.mobile} {
    font-size: 24px;
    margin-top: 24px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;

  ${media.laptop} {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
    padding: 32px 24px;
  }

  ${media.mobile} {
    padding: 24px 12px;
  }
`;
