import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { media } from '../../styles/media';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.black};

  img {
    width: 60%;
    margin: 40px 0;
  }

  ${media.tablet} {
    position: sticky;
    top: 0;
    z-index: 10;
    flex-direction: row;
    gap: 8px;
    height: 64px;
    padding: 0 12px;

    img {
      width: 44px;
      margin: 0;
    }
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.tablet} {
    flex-direction: row;
    justify-content: center;
    gap: 8px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.$isActive ? props.theme.purple : 'transparent'};

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  ${media.tablet} {
    padding: 10px;
    border-radius: 8px;

    svg {
      width: 22px;
      height: 22px;
    }

    span,
    p {
      display: none;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;

  ${media.tablet} {
    width: auto;
    margin-top: 0;
  }
`;
