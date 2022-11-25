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

export default function Hamburger() {
  return (
    <>
      <Title>
        En termes d&apos;émissions de CO<sub>2</sub>e
      </Title>
      <Equivalents>
        <Equivalent size={[12, 6, 8]}>
          <Emojis>🍔</Emojis>
          <Label>
            1 hamburger
            <br />
            avec frites
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[7, 15, 30]}>
          <Emojis>🐖🐖🐖🐖</Emojis>
          <Label>
            4 filets
            <br />
            de porc
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[12, 15, 30]}>
          <Emojis>🥧🥧🥧🥧🥧🥧🥧🥧</Emojis>
          <Label>
            8 tartes
            <br />
            tatins
          </Label>
        </Equivalent>
      </Equivalents>
      <Small>
        <br />
        1 hamburger
        <br />
        avec frites
        <br />=<br />
        4 filets
        <br />
        de porc
        <br />=<br />        
        8 tartes
        <br />
        tatins
        <br />
      </Small>
      <CenterLink to='/iframes/menu'>Voir toutes les assiettes</CenterLink>
    </>
  )
}
