import P from 'prop-types';
import * as S from './styles';

export const Section = ({ children }) => {
  return <S.Section>{children}</S.Section>;
};

Section.propTypes = {
  children: P.node.isRequired,
};
