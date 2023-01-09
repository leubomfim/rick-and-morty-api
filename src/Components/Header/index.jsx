import * as S from './styles';
import logo from '../../images/logo.png';

export const Header = () => {
  return (
    <header>
      <S.LogoBox>
        <S.Logo src={logo} />
      </S.LogoBox>
    </header>
  );
};
