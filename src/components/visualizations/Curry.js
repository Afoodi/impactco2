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

export default function Curry() {
  return (
    <>
      <Title>
        En termes d&apos;émissions de CO<sub>2</sub>e
      </Title>
      <Equivalents>
        <Equivalent size={[10, 20, 28]}>
          <Emojis>🥩</Emojis>
          <Label>
            1 tartare
            <br />
            de boeuf
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[12, 15, 30]}>
          <Emojis>🍛🍛🍛🍛🍛</Emojis>
          <Label>
            5 currys
            <br />
            de poulet
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[29, 15, 30]}>
          <Emojis>🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮</Emojis>
          <Label>
            18 fondants
            <br />
            de chocolat
          </Label>
        </Equivalent>
      </Equivalents>
      <CenterLink to='/iframes/menu'>Voir toutes les assiettes</CenterLink>
    </>
  )
}
