import styled from 'styled-components';

import { media } from '../../styles/media';

export const Container = styled.div`
  min-height: 50px;
  background-color: ${(props) => props.theme.darkPurple};
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: lighter;
    text-align: center;

    ${media.mobile} {
      font-size: 12px;
    }
  }
`;
