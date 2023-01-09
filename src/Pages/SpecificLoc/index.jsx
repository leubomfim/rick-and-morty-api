import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Container } from '../../Components/Container';
import { DropMenu } from '../../Components/DropMenu';
import { Section } from '../../Components/Section';
import { INFO_LOC } from '../../querys';

import * as S from './styles';
import * as Sc from '../characters/styles';
import { useStarContext } from '../../Contexts/contexts';
import { useEffect } from 'react';

export const SpecificLoc = () => {
  const param = useParams();
  const { setDisabled } = useStarContext();

  const { loading, error, data } = useQuery(INFO_LOC, {
    variables: { id: param.id },
  });

  useEffect(() => {
    setDisabled(true);
  }, [setDisabled]);
  console.log(data);
  return (
    <Section>
      <Container>
        {loading && <h2 style={{ textAlign: 'center' }}>Loading...</h2>}
        {error && <h2>{error.message}</h2>}

        {!loading && (
          <>
            <S.Title className="title">{data.location.name}</S.Title>
            <S.Info>
              <S.Paragraph style={{ marginBottom: '10px' }}>
                <S.Span>Type: </S.Span>
                {data.location.type}
              </S.Paragraph>
              <S.Paragraph>
                <S.Span>Dimension:</S.Span>{' '}
                {data.location.dimension === 'unknown'
                  ? 'Not informed.'
                  : data.location.dimension}
              </S.Paragraph>
            </S.Info>
            <S.ResTitle className="title">Residents</S.ResTitle>

            {data.location.residents.length > 0 ? (
              <Sc.Cards>
                {data.location.residents.map((res) => (
                  <Sc.Card key={res.id}>
                    <Sc.CardImage src={res.image} />
                    <div>
                      <Sc.CardName>{res.name}</Sc.CardName>
                      <Sc.StatusParagraph>
                        <Sc.StatusCircleColor
                          status={res.status}
                        ></Sc.StatusCircleColor>
                        <p>
                          {res.status === 'unknown'
                            ? `no status - ${res.species}`
                            : res.status + ' - ' + res.species}
                        </p>
                      </Sc.StatusParagraph>
                      <Sc.CardColumnDetail>
                        <Sc.Paragraph>
                          <Sc.Span>Gender: </Sc.Span>
                          {res.gender}
                        </Sc.Paragraph>
                        <Sc.Paragraph>
                          <Sc.Span>Last known location: </Sc.Span>
                          {res.location.name}
                        </Sc.Paragraph>
                      </Sc.CardColumnDetail>
                    </div>
                    <DropMenu char={res} />
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
