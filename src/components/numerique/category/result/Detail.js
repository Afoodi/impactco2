import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import { formatName, formatNumber, formatConstruction } from 'utils/formatters'
import RulesContext from 'components/numerique/RulesProvider'
import DataContext from 'components/providers/DataProvider'
import BarChart from 'components/charts/BarChart'

const Wrapper = styled.div`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.second};
  border: 0.0625rem solid ${(props) => props.theme.colors.second};
  border-radius: 1rem;
`
const Title = styled.h3`
  text-align: center;
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
`
const Text = styled.p`
  max-width: 24rem;
  margin: 0 auto 0.5rem;
  font-size: 0.875rem;
  text-align: center;
`
export default function Detail(props) {
  const { engine, situation } = useContext(RulesContext)
  const { equivalents, categories } = useContext(DataContext)
  const equivalentsOfCategory = useMemo(
    () =>
      [
        {
          id: `email`,
          title: `1 an d'emails (${formatNumber(
            props.numberEmails * 52
          )} emails)`,
          emoji: '📧',
          color: '#6C8CC1',
          value:
            ((engine.evaluate('email').nodeValue -
              engine.evaluate('email . terminaux . construction').nodeValue) *
              props.numberEmails *
              52) /
            1000,
          to: `/${
            categories.find((category) => category.id === 10).slug
          }/email`,
          onClick: () =>
            window?._paq?.push([
              'trackEvent',
              'Interaction',
              'Navigation via graph categorie',
              'email',
            ]),
        },
        {
          id: `visioconference`,
          title: `1 an de streaming (${formatNumber(
            (engine.evaluate('visio . durée').nodeValue / 60) * 52
          )} heures)`,
          emoji: '🎥',
          color: '#3DC7AB',
          value:
            ((engine.evaluate('visio').nodeValue -
              engine.evaluate('visio . terminaux . construction').nodeValue) *
              52) /
            1000,
          to: `/${
            categories.find((category) => category.id === 10).slug
          }/visioconference`,
          onClick: () =>
            window?._paq?.push([
              'trackEvent',
              'Interaction',
              'Navigation via graph categorie',
              'visioconference',
            ]),
        },
        {
          id: `streaming`,
          title: `1 an de streaming (${formatNumber(
            (engine.evaluate('streaming . durée').nodeValue / 60) * 52
          )} heures)`,
          emoji: '🎬',
          color: '#C25166',
          value:
            ((engine.evaluate('streaming').nodeValue -
              engine.evaluate('streaming . terminaux . construction')
                .nodeValue) *
              52) /
            1000,
          to: `/${
            categories.find((category) => category.id === 10).slug
          }/streaming`,
          onClick: () =>
            window?._paq?.push([
              'trackEvent',
              'Interaction',
              'Navigation via graph categorie',
              'streaming',
            ]),
        },
        ...equivalents
          .filter((equivalent) =>
            [
              'smartphone',
              'tabletteclassique',
              'ordinateurportable',
              'ordinateurfixe',
              'television',
            ].includes(equivalent.slug)
          )
          .map((equivalent) => ({
            id: `${equivalent.slug}`,
            title: `Construction d'un ${formatName(equivalent.name, 1)}`,
            emoji: equivalent.emoji,
            unit: equivalent.unit,
            value: formatConstruction(equivalent),
            to: `/${
              categories.find((category) => category.id === equivalent.category)
                .slug
            }/${equivalent.slug}`,
            onClick: () =>
              window?._paq?.push([
                'trackEvent',
                'Interaction',
                'Navigation via graph categorie',
                equivalent.slug,
              ]),
          })),
      ].sort((a, b) => (a.value > b.value ? 1 : -1)),

    [engine, situation, props.numberEmails, equivalents, categories]
  )

  return (
    <Wrapper>
      <Title>
        Détail de l'impact <Color>à l'année</Color>
      </Title>
      <Text>
        En général, la majorité de votre empreinte numérique provient de la
        construction de vos appareils et pas de l’usage de ces derniers.
      </Text>
      <BarChart
        items={equivalentsOfCategory}
        max={equivalentsOfCategory[equivalentsOfCategory.length - 1]?.value}
      />
    </Wrapper>
  )
}
