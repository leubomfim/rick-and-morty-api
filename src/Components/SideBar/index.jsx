import * as S from './styles';
import { BiChevronRight } from 'react-icons/bi';
import { useStarContext } from '../../Contexts/contexts';
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { CgGhostCharacter } from 'react-icons/cg';
import { BiCameraMovie } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const SideBar = () => {
  const {
    openMenu,
    setSearchValue,
    searchValue,
    disabled,
    setOpenMenu,
    diffSearch,
    searchLoc,
    setSearchLoc,
  } = useStarContext();
  return (
    <S.MenuBackground menu={openMenu}>
      <S.CloseOrOpenMenu menu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <BiChevronRight />
      </S.CloseOrOpenMenu>
      <S.SideMenu menu={openMenu}>
        <S.InputControl>
          {diffSearch === 'char' && (
            <S.Input
              disabled={disabled}
              menu={openMenu}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          )}

          {diffSearch === 'loc' && (
            <S.Input
              disabled={disabled}
              menu={openMenu}
              type="text"
              value={searchLoc}
              onChange={(e) => setSearchLoc(e.target.value)}
            />
          )}

          <S.SearchIcon onClick={() => setOpenMenu(!openMenu)} menu={openMenu}>
            <AiOutlineSearch />
          </S.SearchIcon>
        </S.InputControl>
        <S.Nav>
          <S.List>
            <S.Item onClick={() => setOpenMenu(false)}>
              <Link to="/">
                <AiFillHome /> {openMenu ? 'Home' : ''}
              </Link>
            </S.Item>
            <S.Item onClick={() => setOpenMenu(false)}>
              <Link to="/characters">
                <CgGhostCharacter /> {openMenu ? 'Characters' : ''}
              </Link>
            </S.Item>
            <S.Item onClick={() => setOpenMenu(false)}>
              <Link to="/episodes">
                <BiCameraMovie /> {openMenu ? 'Episodes' : ''}
              </Link>
            </S.Item>
            <S.Item onClick={() => setOpenMenu(false)}>
              <Link to="/locations">
                <MdLocationOn /> {openMenu ? 'Location' : ''}
              </Link>
            </S.Item>
          </S.List>
        </S.Nav>
      </S.SideMenu>
    </S.MenuBackground>
  );
};
