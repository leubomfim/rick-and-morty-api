import styled from 'styled-components';

export const DropMenuEp = styled.div`
  position: absolute;
  left: 0px;
  bottom: -25px;

  @media (max-width: 1024px) {
    left: 0;
    bottom: -45px;
  }

  @media (max-width: 600px) {
    left: auto;
    right: 0;
    bottom: -45px;
  }
`;

export const HoverMenu = styled.div`
  color: #c4c4c4;
  background-color: rgb(61, 61, 61);
  border-radius: 10px;
  cursor: pointer;
  transition: all 2s ease;

  & p {
    font-size: 23px;
    padding: 5px 10px;
  }
`;

export const MenuList = styled.div`
  background-color: rgb(61, 61, 61);
  position: absolute;
  z-index: 2;
  top: 50px;
  border-radius: 10px;
  width: max-content;
  & p {
    font-size: 23px;
  }

  @media (max-width: 1024px) {
    width: 280px;
  }

  @media (max-width: 600px) {
    right: 0px;
    width: 385px;
  }

  @media (max-width: 375px) {
    right: 0px;
    width: 337px;
  }

  @media (max-width: 326px) {
    right: -5px;
    width: 300px;
  }`;

export const List = styled.ul`
  font-size: 20px;
  display: flex;
  color: #c4c4c4;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  font-size: 20px;
`;
