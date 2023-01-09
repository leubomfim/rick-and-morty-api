import { Section } from '../../Components/Section';
import { Container } from '../../Components/Container';
import { useQuery } from '@apollo/client';
import { INFO_ALL_LOC } from '../../querys';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useStarContext } from '../../Contexts/contexts';

import * as S from './styles';
import * as Sc from '../characters/styles';

export const Location = () => {
  const { setDiffSearch, setDisabled, searchLoc, navigate } = useStarContext();
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(INFO_ALL_LOC, {
    variables: { page: page, filter: { name: searchLoc } },
  });

  useEffect(() => {
    setPage(1);
    setDiffSearch('loc');
    setDisabled(false);
  }, [setDiffSearch, setDisabled]);

  if (searchLoc.length > 0 && !loading && data.locations.results.length >= 0) {
    if (page > data.locations.info.pages) return setPage(1);
    if (page === 0) return setPage(data.locations.info.pages);
  }

  if (searchLoc.length === 0) {
    if (page === 0) return setPage(7);

    if (page === 8) return setPage(1);
  }

  console.log(!loading ? data.locations.results : '');

  return (
    <Section>
      <Container>
        {loading && <h2 style={{ textAlign: 'center' }}>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        <S.Cards>
          {!loading &&
            data.locations.results.map((loc, index) => (
              <S.Card
                onClick={() => navigate(`/location/${loc.id}`)}
                key={index}
              >
                <h2>
                  {loc.name.length > 15
                    ? loc.name.substring(0, 15) + '...'
                    : loc.name}
                </h2>
                <S.Paragraph>
                  <S.Span>Type:</S.Span>{' '}
                  {loc.type === '' ? 'Not informed.' : loc.type}
                </S.Paragraph>
              </S.Card>
            ))}
        </S.Cards>
        {!loading &&
        data.locations.results.length > 0 &&
        data.locations.info.pages > 1 ? (
          <Sc.ChangePageBox>
            <Sc.Button onClick={() => setPage(page - 1)}>
              <BiChevronLeft />
            </Sc.Button>
            <Sc.Page>{page}</Sc.Page>
            <Sc.Button onClick={() => setPage(page + 1)}>
              <BiChevronRight />
            </Sc.Button>
          </Sc.ChangePageBox>
        ) : null}
      </Container>
    </Section>
  );
};
