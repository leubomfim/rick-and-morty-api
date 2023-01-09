import styled from 'styled-components';

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: rgb(61, 61, 61);
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 341px;

  &:hover {
    transform: scale(1.1);
  }

  & h2 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    word-break: break-all;
  }

  @media (max-width: 900px) {
    max-width: 320px;
  };
`;

export const Paragraph = styled.p`
  font-size: 23px;
`;

export const Span = styled.span`
  font-weight: 600;
  color: #c4c4c4;
`;
