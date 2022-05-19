import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'
import ContactPrompt from 'components/base/ContactPrompt'
import Section from 'components/base/Section'
import Button from 'components/base/Button'
import Marianne from 'components/base/Marianne'
import Ademe from 'components/base/Ademe'
import Datagir from 'components/base/Datagir'

const Wrapper = styled.footer`
  position: relative;
  background-color: ${(props) =>
    props.theme.colors[props.iframe ? 'background' : 'textLight']};
`
const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Logos = styled(MagicLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.iframe ? 'auto' : '100%')};
  margin: 0 auto;
  padding: 0 0.75rem;
  text-decoration: none;
  background-color: #fff;
  border-radius: ${(props) => (props.iframe ? 1 : 0)}rem;

  ${(props) => props.theme.mq.small} {
    padding: 0 0.25rem;
    font-size: ${(props) => (props.iframe ? 0.75 : 1)}rem;
  }
`
const Accessibility = styled.div`
  padding-bottom: 1rem;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
`
export default function Footer(props) {
  return (
    <Wrapper
      className={props.className}
      background={props.background}
      id='apropos'
    >
      <Section.Content>
        <ContactPrompt />
      </Section.Content>
      <Section.Content>
        <h2>Qui sommes-nous ?</h2>
        <p>
          <MagicLink to='https://datagir.ademe.fr/'>
            <strong>Datagir</strong>
          </MagicLink>{' '}
          est un <strong>service public gratuit</strong>, porté par l’
          <MagicLink to='https://www.ademe.fr/'>ADEME</MagicLink> et
          l’incubateur de la DINUM{' '}
          <MagicLink to='https://beta.gouv.fr/'>beta.gouv.fr</MagicLink>.
        </p>
        <p>
          Notre mission est de{' '}
          <strong>
            diffuser les informations et données environnementales en open-data
            de l’ADEME
          </strong>{' '}
          pour encourager l’amélioration continue et l’innovation. Pour cela,{' '}
          <strong>
            nous accompagnons toutes les applications & services dans leur
            démarche responsable
          </strong>{' '}
          par l'appropriation et l’intégration de ces données afin d’apporter
          l’information au plus près des citoyens.
        </p>
        <Button to='https://datagir.ademe.fr/#applications'>
          Voir tous nos simulateurs
        </Button>
      </Section.Content>
      <LogosWrapper>
        <Logos
          to='https://datagir.ademe.fr/'
          aria-label='datagir.ademe.fr'
          noIcon
        >
          <Marianne />
          <Ademe />
          <Datagir />
        </Logos>
      </LogosWrapper>
      <Accessibility>accessibilité : non conforme</Accessibility>
    </Wrapper>
  )
}
