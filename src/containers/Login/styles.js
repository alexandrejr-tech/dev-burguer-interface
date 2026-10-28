import { Link as ReactLink } from 'react-router-dom';

import styled from 'styled-components';

import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';
import { media } from '../../styles/media';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }

  ${media.tablet} {
    max-width: 100%;
    height: 200px;
    flex-shrink: 0;

    img {
      width: auto;
      height: 150px;
    }
  }

  ${media.mobile} {
    height: 160px;

    img {
      height: 120px;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${Background}');
  background-color: ${(props) => props.theme.darkBlack};

  ${media.tablet} {
    max-width: 100%;
    flex: 1;
    justify-content: flex-start;
    padding: 32px 16px 40px;
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
    }

    ${media.mobile} {
      font-size: 15px;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  text-align: center;

  ${media.mobile} {
    font-size: 30px;
  }
  color: ${(props) => props.theme.white};

  span {
    color: ${(props) => props.theme.purple};
    font-family: 'Road Rage', sans-serif;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

  ${media.mobile} {
    padding: 20px 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
    font-size: 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: ${(props) => props.theme.darkRed};
    font-weight: 600;
    height: 10px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;
