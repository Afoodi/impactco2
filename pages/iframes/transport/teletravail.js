import React from 'react'

import categories from 'data/categories.json'

import { TransportProvider } from 'components/transport/TransportProvider'
import Iframe from 'components/layout/Iframe'
import Teletravail from 'components/transport/Teletravail'

export default function TeletravailPage(props) {
  return (
    <Iframe>
      <TransportProvider>
        <Teletravail category={props.category} iframe />
      </TransportProvider>
    </Iframe>
  )
}
export async function getStaticProps() {
  return {
    props: {
      category: categories.find((item) => item.id === 4),
    },
  }
}
