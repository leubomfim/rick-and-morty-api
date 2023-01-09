import styled, { css } from 'styled-components';

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
  justify-content: center;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 400px);
    gap: 85px;
  }

  @media (max-width: 1024px) {
    display: flex;
    grid-template-columns: none;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 70px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  color: #C4C4C4;
  position: relative;
  width: 471.656px;
  height: 224px;

  @media (max-width: 1024px) {
    width: 250px;
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 600px) {

    width: 100%;
    height: auto;
  }
`;

export const CardImage = styled.img`
  height: 200px;
`;

export const CardName = styled.h2`
  margin-bottom: 5px;
`;

export const CardColumnDetail = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const StatusParagraph = styled.div`
  font-size: 20px;
  position: relative;
  margin-left: 15px;
  margin-bottom: 15px;
`;

export const StatusCircleColor = styled.div`
  ${({ status }) => css`
    ${status === 'Alive' && 'background-color: #55CC44;'}
    ${status === 'Dead' && 'background-color: rgb(214,61,46);'}
    ${status === 'unknown' && 'background-color: #C4C4C4;'}
  `}

  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  left: -15px;
  top: 50%;
  margin-top: -5px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  width: 250px;
`;

export const Span = styled.span`
  font-weight: 600;
`;

export const ChangePageBox = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
`;

export const Page = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  color: #c4c4c4;
  background-color: rgb(41, 41, 41);
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  border-radius: 50%;
  cursor: pointer;
`;
