import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: ${(props) => props.theme.purple};
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 22px;
  }

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
  }
`;
