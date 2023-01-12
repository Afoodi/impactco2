import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import Section from 'components/base/Section'
import ShareButton from 'components/base/ShareButton'
import Category from './categories/Category'

const Title = styled.h1`
  margin-bottom: 1.25rem;
  text-align: left;
`
const Text = styled.p`
  max-width: 30rem;
  margin: 0 ${(props) => (props.main ? 0 : 'auto')} 1.5rem;
  font-weight: ${(props) => (props.main ? 'normal' : 300)};
  text-align: ${(props) => (props.main ? 'left' : 'center')};
`
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  ${(props) => props.theme.mq.medium} {
    gap: 0.75rem;
  }
`
export default function Categories(props) {
  const { categories } = useContext(DataContext)

  return (
    <>
      {props.main && (
        <Section>
          <Section.Content flex>
            <Title>MENU DE BISTROT</Title>
            <ShareButton title />
          </Section.Content>
        </Section>
      )}
      <Section>
        <Section.Content>
          {props.main ? (
            <Text main>
              Découvrez maintenant pourquoi une assiette à
              faible impact CO2 à aussi une forte marge!
            </Text>
          ) : (
            <Text>Vous pouvez aussi naviguer par catégorie :</Text>
          )}
          <List>
            {categories
              .filter((category) => category.display)
              .map((category) => (
                <Category key={category.slug} category={category} />
              ))}
          </List>
        </Section.Content>
      </Section>
    </>
  )
}
