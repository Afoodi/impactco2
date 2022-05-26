import React from 'react'
import styled from 'styled-components'

import Section from 'components/base/Section'
import SimpleTile from 'components/base/SimpleTile'

const Title = styled.h2``
export default function Contact(props) {
  return (
    <Section>
      <Section.Content>
        <Title>
          Comment intégrer ces données
          <br />à mon site ou application ?
        </Title>
        <SimpleTile.Wrapper>
          <SimpleTile
            item={{
              title: 'Affichez nos simulateurs sur votre site',
              text: `Personnalisez-les et intégrez-les facilement grace à notre configurateur`,
              emoji: '📲',
              url: '/integration',
              button: 'Voir le configurateur',
            }}
            small
          />
          <SimpleTile
            item={{
              title: 'Réutilisez les données brutes',
              text: `Contactez nous à datagir@ademe.fr pour bénéficier de notre expertise et accompagnement.`,
              emoji: '📊',
              url: 'mailto:datagir@ademe.fr',
              button: 'Contacter Datagir',
            }}
            small
          />
          <SimpleTile
            item={{
              title: 'Reprenez le code de nos simulateurs',
              text: `Nos simulateurs sont développés de manière ouverte (open source). L’ensemble du code est disponible librement`,
              emoji: '⚙️',
              url: 'https://github.com/datagir/',
              button: 'Voir le code',
            }}
            small
          />
        </SimpleTile.Wrapper>
      </Section.Content>
    </Section>
  )
}
