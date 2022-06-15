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

export default function MontreCategory() {
  return (
    <>
      <Title>
        En termes d'émissions de CO2<sub>e</sub>
      </Title>
      <Equivalents>
        <Equivalent size={[7.5, 6, 8]}>
          <Emojis>💻</Emojis>
          <Label>1 ordinateur portable</Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[10, 8, 24]}>
          <Emojis>📱📱📱📱📱📱</Emojis>
          <Label>5 smartphones</Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[20, 12, 24]}>
          <Emojis>⌚️⌚️⌚️⌚️⌚️⌚️⌚️⌚️⌚️⌚️⌚️⌚️⌚️⌚️</Emojis>
          <Label>14 montres connectées</Label>
        </Equivalent>
      </Equivalents>
      <Small>
        <br />1 télévision
        <br />=
        <br />3 ordinateurs portables
        <br />=
        <br />
        13 smartphones
        <br />
      </Small>
      <CenterLink to='/categories/numerique'>
        Voir la catégorie numérique
      </CenterLink>
    </>
  )
}
