import React from 'react'

import {
  Title,
  Equivalents,
  Equivalent,
  Emojis,
  Label,
  Equals,
  CenterLink,
  Small,
} from 'components/misc/Visualization'

export default function Tartare() {
  return (
    <>
      <Title>
        En termes d&apos;émissions de CO<sub>2</sub>e
      </Title>
      <Equivalents>
        <Equivalent size={[7.5, 6, 8]}>
          <Emojis>🥩</Emojis>
          <Label>
            1 tartare
            <br />
            de boeuf
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[10, 5, 2]}>
          <Emojis>🥑🥑🥑🥑🥑🥑</Emojis>
          <Label>
            6 avocado
            <br />
            toast
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[20, 15, 30]}>
          <Emojis>🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅</Emojis>
          <Label>
            12 soupes à
            <br />
            l'oignon
          </Label>
        </Equivalent>
      </Equivalents>
      <Small>
        <br />
        1 tartare
        <br />
        de boeuf
        <br />=<br />
        6 avocado
        <br />
        toast
        <br />=<br />        
        12 soupes à
        <br />
        l'oignon
        <br />
      </Small>
      <CenterLink to='/iframes/menu'>Voir toutes les assiettes</CenterLink>
    </>
  )
}
