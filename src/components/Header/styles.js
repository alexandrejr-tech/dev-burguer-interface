import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { media } from '../../styles/media';

export const Container = styled.div`
  background-color: ${(props) => props.theme.mainBlack};
  width: 100%;
  height: 72px;
  padding: 0 56px;

  ${media.tablet} {
    padding: 0 24px;
  }

  ${media.mobile} {
    height: 60px;
    padding: 0 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    ${media.mobile} {
      gap: 12px;
    }
  }

  hr {
    height: 24px;
    border: 1px solid;
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) =>
    props.$isActive ? props.theme.purple : props.theme.white};
  border-bottom: ${(props) =>
    props.$isActive ? `1px solid ${props.theme.purple}` : 'none'};
  padding-bottom: 5px;
  text-decoration: none;
  font-size: 14px;
  transition: color 200ms;

  &:hover {
    color: ${(props) => props.theme.purple};
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;

  ${media.tablet} {
    gap: 24px;
  }

  ${media.mobile} {
    gap: 16px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;

  p {
    color: ${(props) => props.theme.white};
    line-height: 90%;
    font-weight: 300;

    span {
      font-weight: 700;
      color: ${(props) => props.theme.purple};
    }
  }

  ${media.mobile} {
    > svg,
    p {
      display: none;
    }
  }
`;

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.white};
  font-size: 14px;
  text-decoration: none;
  transition: color 200ms;

  &:hover {
    color: ${(props) => props.theme.purple};
  }

  ${media.mobile} {
    span:last-child {
      display: none;
    }
  }
`;

export const CartIconWrapper = styled.span`
  position: relative;
  display: flex;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: 9px;
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logout = styled.button`
  color: ${(props) => props.theme.red};
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
`;
