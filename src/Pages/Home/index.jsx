import { useEffect } from 'react';
import { Section } from '../../Components/Section';
import { useStarContext } from '../../Contexts/contexts';
import rickPhoto from '../../images/rick.png';
import loc from '../../images/loc.png';
import morty from '../../images/morty.png';

import * as S from './styles';

export const Home = () => {
  const { setDisabled, navigate } = useStarContext();
  useEffect(() => {
    setDisabled(true);
  }, [setDisabled]);
  return (
    <>
      <Section>
        <S.Container>
          <S.Cards>
            <S.Box colorBox={'char'} onClick={() => navigate('/characters')}>
              <S.BoxTitle>Characters</S.BoxTitle>
              <img src={rickPhoto} alt="Rick photo" />
            </S.Box>
            <S.Box colorBox={'episodes'} onClick={() => navigate('/episodes')}>
              <S.BoxTitle>Episodes</S.BoxTitle>
              <img src={morty} alt="Morty angry in the photo" />
            </S.Box>
            <S.Box colorBox={'location'} onClick={() => navigate('/locations')}>
              <S.BoxTitle>Locations</S.BoxTitle>
              <img
                src={loc}
                alt="Rick and Morty jumping out of the portal together"
              />
            </S.Box>
          </S.Cards>
        </S.Container>
      </Section>
    </>
  );
};
