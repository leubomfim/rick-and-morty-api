import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Section } from '../../Components/Section';
import { Container } from '../../Components/Container';
import { INFO_CHAR } from '../../querys';
import * as S from './styles';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { useStarContext } from '../../Contexts/contexts';
import { DropMenu } from '../../Components/DropMenu';
export const Characters = () => {
  const { searchValue, setDisabled, setDiffSearch } = useStarContext();
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(INFO_CHAR, {
    variables: { page: page, filter: { name: searchValue } },
  });

  useEffect(() => {
    setPage(1);
    setDiffSearch('char');
    setDisabled(false);
  }, [searchValue, setDisabled, setDiffSearch]);

  if (
    searchValue.length > 0 &&
    !loading &&
    data.characters.results.length >= 0
  ) {
    if (page > data.characters.info.pages) return setPage(1);
    if (page === 0) return setPage(data.characters.info.pages);
  }

  if (searchValue.length === 0) {
    if (page === 0) return setPage(42);

    if (page === 43) return setPage(1);
  }

  return (
    <>
      {loading && <h2 style={{ textAlign: 'center' }}>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      <Section>
        <Container>
          {!loading &&
            searchValue.length > 0 &&
            data.characters.results.length === 0 && (
              <h2
                style={{ textAlign: 'center' }}
              >{`Could not find any character with that name: "${searchValue}"`}</h2>
            )}
          <S.Cards>
            {!loading &&
              data.characters.results.map((char, index) => (
                <S.Card key={index}>
                  <S.CardImage src={char.image} />
                  <div>
                    <S.CardName>{char.name}</S.CardName>
                    <S.StatusParagraph>
                      <S.StatusCircleColor
                        status={char.status}
                      ></S.StatusCircleColor>
                      <p>
                        {char.status === 'unknown'
                          ? `no status - ${char.species}`
                          : char.status + ' - ' + char.species}
                      </p>
                    </S.StatusParagraph>
                    <S.CardColumnDetail>
                      <S.Paragraph>
                        <S.Span>Gender: </S.Span>
                        {char.gender}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Last known location: </S.Span>
                        {char.location.name}
                      </S.Paragraph>
                    </S.CardColumnDetail>
                  </div>
                  <DropMenu char={char} />
                </S.Card>
              ))}
          </S.Cards>
          {!loading &&
          data.characters.results.length > 0 &&
          data.characters.info.pages > 1 ? (
            <S.ChangePageBox>
              <S.Button onClick={() => setPage(page - 1)}>
                <BiChevronLeft />
              </S.Button>
              <S.Page>{page}</S.Page>
              <S.Button onClick={() => setPage(page + 1)}>
                <BiChevronRight />
              </S.Button>
            </S.ChangePageBox>
          ) : null}
        </Container>
      </Section>
    </>
  );
};
