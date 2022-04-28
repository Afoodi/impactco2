import React from 'react'
import styled from 'styled-components'

import Section from 'components/base/Section'
import Share from 'components/misc/Share'
import CategorySlider from 'components/misc/CategorySlider'
import CategoryList from 'components/misc/CategoryList'

const Title = styled.h1``
export default function Category(props) {
  return (
    <>
      <Section>
        <Section.Content flex>
          <Title>Catégories</Title>
          <Share title />
        </Section.Content>
      </Section>
      <CategorySlider category={props.category} />
      <CategoryList category={props.category} small />
    </>
  )
}
