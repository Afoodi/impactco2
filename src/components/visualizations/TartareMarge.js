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

export default function TartareMarge() {
  return (
    <>
      <Title>
        En termes % de marge brut
      </Title>
      <Equivalents>
        <Equivalent size={[10, 5, 25]}>
          <Emojis>🧅</Emojis>
          <Label>
            soupe à
            <br />
            l'oignon
          </Label>
        </Equivalent>
        <Equals>&gt;</Equals>
        <Equivalent size={[10, 5, 25]}>
          <Emojis>🥑</Emojis>
          <Label>
            avocado
            <br />
            toast
          </Label>
        </Equivalent>
        <Equals>&gt;</Equals>
        <Equivalent size={[10, 5, 25]}>
          <Emojis>🥩</Emojis>
          <Label>
            tartare
            <br />
            de boeuf
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
      <CenterLink to='/entrees'>Voir tous les entrées</CenterLink>
    </>
  )
}
