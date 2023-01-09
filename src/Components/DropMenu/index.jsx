import * as S from './styles';
import P from 'prop-types';
import { useState } from 'react';

export const DropMenu = ({ char }) => {
  const [open, setOpen] = useState(false);

  return (
    <S.DropMenuEp>
      <S.HoverMenu
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p>Episodes</p>
      </S.HoverMenu>
      <S.MenuList className={open ? 'open_menu' : 'close_menu'}>
        <S.List>
          {char.episode.map((ep) => (
            <S.Item key={ep.name}>{`${ep.episode} - ${ep.name}`}</S.Item>
          ))}
        </S.List>
      </S.MenuList>
    </S.DropMenuEp>
  );
};

DropMenu.propTypes = {
  char: P.object,
};
