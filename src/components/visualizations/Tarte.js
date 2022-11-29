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

export default function Thon() {
  return (
    <>
      <Title>
        En termes d&apos;émissions de CO<sub>2</sub>e
      </Title>
      <Equivalents>
        <Equivalent size={[10, 6, 8]}>
          <Emojis>🍰</Emojis>
          <Label>
            1 cheese
            <br />
            cake
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[10, 5, 2]}>
          <Emojis>🍓🍓</Emojis>
          <Label>
            2 tartes
            <br />
            aux fraises
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[10, 15, 30]}>
          <Emojis>🍧🍧🍧</Emojis>
          <Label>
            3 îles
            <br />
            flottantes
          </Label>
        </Equivalent>
      </Equivalents>
      <CenterLink to='/iframes/menu'>Voir toutes les assiettes</CenterLink>
    </>
  )
}
