import styled from 'styled-components';

import { media } from '../../styles/media';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    min-width: 0;
    height: 100vh;
    background-color: ${(props) => props.theme.secondWhite};
    overflow-y: auto;
  }

  section {
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 1200px;
    width: 100%;
  }

  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);

    main {
      height: auto;
      min-height: calc(100vh - 64px);
      overflow-y: visible;
    }

    section {
      padding: 20px 12px;
    }

    .MuiTableCell-root {
      padding: 10px 8px;
      font-size: 13px;
    }
  }
`;
