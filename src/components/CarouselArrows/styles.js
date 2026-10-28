import styled from 'styled-components';

import { media } from '../../styles/media';

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.$side === 'left' ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${(props) => props.theme.purple};
  z-index: 2;

  &:disabled {
    color: ${(props) => props.theme.lightGray};
    cursor: default;
  }

  ${media.tablet} {
    svg {
      width: 28px;
      height: 28px;
    }
  }

  ${media.mobile} {
    display: none;
  }
`;
