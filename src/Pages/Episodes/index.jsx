import { useQuery } from '@apollo/client';
import { Container } from '../../Components/Container';
import { Section } from '../../Components/Section';
import { useStarContext } from '../../Contexts/contexts';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import { INFO_ALL_EPS } from '../../querys';
import * as Sl from '../Location/styles';
import * as Sc from '../characters/styles';
import { useEffect, useState } from 'react';

export const Episodes = () => {
  const { navigate, setDisabled } = useStarContext();
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(INFO_ALL_EPS, {
    variables: { page: page },
  });

  useEffect(() => {
    setPage(1);
    setDisabled(true);
  }, [setDisabled]);

  if (!loading) {
    if (page === 0) return setPage(data.episodes.info.pages);

    if (page > data.episodes.info.pages) return setPage(1);
  }

  return (
    <Section>
      <Container>
        {loading && <h2 style={{ textAlign: 'center' }}>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        {!loading && (
          <Sl.Cards>
            {data.episodes.results.map((ep) => (
              <Sl.Card
                onClick={() => navigate(`/episode/${ep.id}`)}
                key={ep.id}
              >
                <h3
                  style={{
                    fontSize: '23px',
                    textAlign: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {ep.name.length > 15
                    ? ep.name.substring(0, 16) + '...'
                    : ep.name}
                </h3>
                <Sl.Paragraph style={{ marginBottom: '5px' }}>
                  <Sl.Span>Season:</Sl.Span> {ep.episode[2]}
                </Sl.Paragraph>
                <Sl.Paragraph style={{ marginBottom: '5px' }}>
                  <Sl.Span>Episode:</Sl.Span>{' '}
                  {ep.episode[5] === '0' ? '10' : ep.episode[5]}
                </Sl.Paragraph>
                <Sl.Paragraph>
                  <Sl.Span>Date:</Sl.Span>{' '}
                  {ep.air_date === 'unknown' ? 'Not informed.' : ep.air_date}
                </Sl.Paragraph>
              </Sl.Card>
            ))}
          </Sl.Cards>
        )}
        {!loading &&
        data.episodes.results.length > 0 &&
        data.episodes.info.pages > 1 ? (
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
