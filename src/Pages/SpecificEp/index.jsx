import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../Components/Container';
import { Section } from '../../Components/Section';
import { useStarContext } from '../../Contexts/contexts';
import { INFO_EP } from '../../querys';

import * as S from '../SpecificLoc/styles';
import * as Sc from '../characters/styles';
import { DropMenu } from '../../Components/DropMenu';

export const SpecificEp = () => {
  const param = useParams();
  const { setDisabled } = useStarContext();

  const { loading, error, data } = useQuery(INFO_EP, {
    variables: { id: param.id },
  });

  useEffect(() => {
    setDisabled(true);
  }, [setDisabled]);

  if (!loading) {
    console.log(data);
  }

  return (
    <Section>
      <Container>
        {loading && <h2 style={{ textAlign: 'center' }}>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        {!loading && (
          <>
            <h2
              style={{
                textAlign: 'center',
                fontSize: '32px',
                marginBottom: '50px',
              }}
            >
              {data.episode.name}
            </h2>
            <div style={{ marginBottom: '40px' }}>
              <Sc.Paragraph style={{ marginBottom: '15px' }}>
                <Sc.Span>Season: </Sc.Span>
                {data.episode.episode[2]}.
              </Sc.Paragraph>
              <Sc.Paragraph style={{ marginBottom: '15px' }}>
                <Sc.Span>Episode: </Sc.Span>
                {data.episode.episode[5]}.
              </Sc.Paragraph>
              <Sc.Paragraph>
                <Sc.Span>Air Date: </Sc.Span>
                {data.episode.air_date}.
              </Sc.Paragraph>
            </div>
            <h3
              style={{
                textAlign: 'center',
                fontSize: '28px',
                marginBottom: '40px',
              }}
            >
              Characters
            </h3>
            {data.episode.characters.length > 0 ? (
              <Sc.Cards>
                {data.episode.characters.map((ep) => (
                  <Sc.Card key={ep.id}>
                    <Sc.CardImage src={ep.image} />
                    <div>
                      <Sc.CardName>{ep.name}</Sc.CardName>
                      <Sc.StatusParagraph>
                        <Sc.StatusCircleColor
                          status={ep.status}
                        ></Sc.StatusCircleColor>
                        <p>
                          {ep.status === 'unknown'
                            ? `no status - ${ep.species}`
                            : ep.status + ' - ' + ep.species}
                        </p>
                      </Sc.StatusParagraph>
                      <Sc.CardColumnDetail>
                        <Sc.Paragraph>
                          <Sc.Span>Gender: </Sc.Span>
                          {ep.gender}
                        </Sc.Paragraph>
                        <Sc.Paragraph>
                          <Sc.Span>Last known location: </Sc.Span>
                          {ep.location.name}
                        </Sc.Paragraph>
                      </Sc.CardColumnDetail>
                    </div>
                    <DropMenu char={ep} />
                  </Sc.Card>
                ))}
              </Sc.Cards>
            ) : (
              <S.NoExist>Not residents.</S.NoExist>
            )}
          </>
        )}
      </Container>
    </Section>
  );
};
