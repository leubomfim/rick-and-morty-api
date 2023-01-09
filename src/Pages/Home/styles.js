import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1515px;

  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

export const Cards = styled.div`
  display: flex;

  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Box = styled.div`
  ${({ colorBox }) => css`
    ${colorBox === 'char' && 'background-color: #00B5CC;'};
    ${colorBox === 'episodes' && 'background-color: #91B620;'};
    ${colorBox === 'location' && 'background-color: rgb(41, 41, 41);'};
    width: 350px;
    height: 225px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img {
      width: 125px;
      height: 165px;
    }
  `};
`;

export const BoxTitle = styled.h2`
  font-size: 32px;
`;
