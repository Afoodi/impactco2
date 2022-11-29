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
          <Emojis>🐟</Emojis>
          <Label>
            1 tartare
            <br />
            thon rouge
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[10, 5, 2]}>
          <Emojis>🍅🍅</Emojis>
          <Label>
            2 salades
            <br />
            tomates mozzarella
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[10, 15, 30]}>
          <Emojis>🧆🧆🧆</Emojis>
          <Label>
            3 beignets
            <br />
            de legumes
          </Label>
        </Equivalent>
      </Equivalents>
      <CenterLink to='/iframes/menu'>Voir toutes les assiettes</CenterLink>
    </>
  )
}
