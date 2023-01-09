import styled, { css } from 'styled-components';

export const MenuBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #91b62021;
  top: 0;
  z-index: 3;
  transition: width 0.5s ease;

  ${({ menu }) => css`
    ${menu ? 'width: 100%;' : 'width: 80px;'}
  `}

  @media (max-width: 1025px) {
    ${({ menu }) => css`
      ${
        menu ? 'width: 100%; position: fixed;' : 'width: 0; position: absolute;'
      }
    `}


  }
`;

export const InputControl = styled.div`
  margin-top: 100px;
  position: relative;
  display: flex;
  justify-content: center;

  & input:disabled + div {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  ${({ menu }) => css`
    ${menu ? `color: white;` : `color: transparent;`}

    width: 100%;
    padding: 12px 12px 12px 50px;
    font-size: 22px;
    background-color: #00b5cc;
    border-radius: 5px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}

  @media (max-width: 1025px) {
    width: 90%;
  }
`;

export const SearchIcon = styled.div`
  top: 8px;
  left: 14px;
  display: flex;
  font-size: 35px;
  position: absolute;
  cursor: pointer;

  @media (max-width: 1025px) {
    left: 22px;
  }
`;

export const SideMenu = styled.div`
  position: fixed;
  height: 100%;
  background-color: rgb(41, 41, 41);
  top: 0;
  z-index: 4;
  overflow: hidden;
  transition: width 0.5s ease;
  ${({ menu }) => css`
    ${menu ? 'width: 300px;' : 'width: 80px;'}
  `}

  padding: 10px;

  @media (max-width: 1025px) {
    ${({ menu }) => css`
      ${menu ? 'width: 300px;' : 'width: 0;'}
      padding: 0;
    `}
  }

  @media (max-width: 400px) {
    ${({ menu }) => css`
      ${menu ? 'width: 250px;' : 'width: 0;'}
      padding: 0;
    `}
  }
`;

export const CloseOrOpenMenu = styled.button`
  ${({ menu }) => css`
    ${
      menu
        ? `
          transform: rotate(-180deg);
          left: 283px;

          @media (max-width: 400px) {
            left: 232px;
          }
        `
        : `
          transform: rotate(0deg);
          left: 63px;

          @media (max-width: 600px) {
            left: 30px;
          }
        `
    }

    position: absolute;
    top: 42px;
    font-size: 35px;
    color: white;
    background-color: #00B5CC;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    transition: all 0.5s ease;

    @media (max-width: 600px) {
      top: 28px;
    }
  `}
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Item = styled.li`
  & a {
    display: flex;
    gap: 15px;
    font-size: 25px;
    color: #c4c4c4;
    white-space: nowrap;
    transition: all 0.3s ease;
  }

  & a:hover {
    color: #00B5CC;
  }
`;
