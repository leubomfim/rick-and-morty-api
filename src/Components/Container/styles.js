import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1515px;

  @media screen and (max-width: 1440px) {
    width: 80%;
  }

  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;
