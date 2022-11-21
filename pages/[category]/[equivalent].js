import React from 'react'

import entrees from 'data/categories/entrees.json'
import plats from 'data/categories/plats.json'
import desserts from 'data/categories/desserts.json'
import categories from 'data/categories.json'

import Web from 'components/layout/Web'
import Details from 'components/views/equivalent/Details'
import VisualizationSlider from 'components/views/equivalent/VisualizationSlider'
import Ecv from 'components/views/equivalent/Ecv'
import Text from 'components/views/equivalent/Text'

const equivalents = [
  ...entrees,
  ...plats,
  ...desserts,
].map((equivalent) => ({ ...equivalent, id: equivalent.slug }))

export default function Equivalent(props) {
  return (
    <Web
      title={props.equivalent.meta.title}
      description={props.equivalent.meta.description}
      breadcrumb={{
        type: 'equivalent',
        category: props.category,
        equivalent: props.equivalent,
      }}
    >
      <Details equivalent={props.equivalent} category={props.category} />
      <VisualizationSlider equivalent={props.equivalent} />
      <Ecv equivalent={props.equivalent} />
      <Text equivalent={props.equivalent} />
    </Web>
  )
}

export async function getStaticPaths() {
  return {
    paths: equivalents
      .filter(
        (equivalent) =>
          ![
            'email',
            'visioconference',
            'audioconference',
            'rechercheweb',
            'streamingvideo',
          ].includes(equivalent.slug)
      )
      .map((equivalent) => ({
        params: {
          equivalent: equivalent.slug,
          category: categories.find(
            (category) => category.id === equivalent.category
          ).slug,
        },
      })),
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  return {
    props: {
      equivalent: equivalents.find(
        (equivalent) => equivalent.slug === params.equivalent
      ),
      category: categories.find(
        (category) => category.slug === params.category
      ),
    },
  }
}
