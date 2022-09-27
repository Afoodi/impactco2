import React, { useState, useContext, useMemo } from 'react'
import styled from 'styled-components'

import { formatNumber, formatTotal } from 'utils/formatters'
import DataContext from 'components/providers/DataProvider'
import Tile from 'components/misc/tiles/Tile'
import ButtonLink from 'components/base/ButtonLink'

export const Title = styled.h3`
  font-weight: normal;
  text-align: center;
  margin-bottom: 1.5rem;
`
const Tiles = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  filter: blur(${(props) => (props.blur ? '1rem' : 0)});
  transition: filter 500ms ease-out;

  ${(props) => props.theme.mq.medium} {
    gap: 0.75rem;
  }
`
const Input = styled.input`
  width: ${(props) => (props.mode === 'emails' ? 6 : 4.5)}rem;
  margin: 0 0.5rem 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.125rem;
  text-align: right;
  color: ${(props) => props.theme.colors.text};
  background-color: transparent;
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.75rem;
  transition: box-shadow 300ms ease-out;

  &:focus {
    outline: none;
    box-shadow: 0 -0 0px 1px ${(props) => props.theme.colors.main};
  }
`

const Text = styled.p`
  text-align: center;
  filter: blur(${(props) => (props.blur ? '1rem' : 0)});
  transition: filter 500ms ease-out;
`
const StyledButtonLink = styled(ButtonLink)`
  font-size: 0.75rem;
`
const ButtonMore = styled(ButtonLink)`
  font-size: 0.75rem;
`
const More = styled.div`
  margin: 1rem auto 2rem;
`
export default function StockageEmails() {
  const [displayMore, setDisplayMore] = useState(false)

  const { equivalents } = useContext(DataContext)
  const equivalentsToShow = useMemo(
    () =>
      equivalents.filter((equivalent) =>
        ['voiturethermique', 'repasavecduboeuf', 'cigarette'].includes(
          equivalent.slug
        )
      ),
    [equivalents]
  )
  const emailWeight = useMemo(
    () =>
      equivalents.find((equivalent) =>
        ['stockageemail'].includes(equivalent.slug)
      ),
    [equivalents]
  )
  const gigabyteWeight = useMemo(
    () =>
      equivalents.find((equivalent) =>
        ['stockagedonnée'].includes(equivalent.slug)
      ),
    [equivalents]
  )

  const [mode, setMode] = useState('emails')
  const [emails, setEmails] = useState(null)
  const [gigabytes, setGigabytes] = useState(null)

  const totalWeight = useMemo(
    () =>
      mode === 'emails'
        ? formatTotal(emailWeight) * emails
        : formatTotal(gigabyteWeight) * gigabytes,
    [emailWeight, gigabyteWeight, emails, gigabytes, mode]
  )
  return (
    <>
      <Title>Découvrez l'impact de votre boite mail sur le climat</Title>
      <Text>
        J'ai
        {mode === 'emails' ? (
          <Input
            key='1'
            mode={mode}
            type='number'
            value={emails}
            onChange={(e) => setEmails(e.currentTarget.value)}
            placeholder='XXXX'
          />
        ) : (
          <Input
            key='2'
            mode={mode}
            type='number'
            value={gigabytes}
            onChange={(e) => setGigabytes(e.currentTarget.value)}
            placeholder='XX'
          />
        )}
        {mode === 'weight' ? `Go d'` : ''}emails stockés.{' '}
        <StyledButtonLink
          onClick={() =>
            setMode((prevMode) => (prevMode === 'weight' ? 'emails' : 'weight'))
          }
        >
          (Entrer le{' '}
          {mode === 'emails' ? <>poids en Go</> : <>nombre d'emails</>} plutôt)
        </StyledButtonLink>
      </Text>
      <Text blur={!totalWeight}>
        Ma boite mail émet{' '}
        <strong>
          {formatNumber(totalWeight)} kg CO<sub>2</sub>e par an
        </strong>
        , soit l'équivalent de...
      </Text>
      <Tiles blur={!totalWeight}>
        {equivalentsToShow.map((equivalent) => (
          <Tile
            key={equivalent.slug}
            equivalent={equivalent}
            weight={totalWeight}
            background={true}
            equivalentPage={true}
            reference
          />
        ))}
      </Tiles>
      <ButtonMore
        onClick={() => setDisplayMore((prevDisplayMore) => !prevDisplayMore)}
      >
        En savoir plus
      </ButtonMore>
      {displayMore && (
        <More>
          On prends comme hypothèse un poids moyen de 200ko par email.
        </More>
      )}
    </>
  )
}
