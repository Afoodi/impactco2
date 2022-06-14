import React from 'react'

import Web from 'components/layout/Web'
import Equivalent from '../views/Equivalent'

export default function equivalent(props) {
  return (
    <Web
      title={`Découvrez l'impact d'un ${props.pageContext.equivalent.name.fr} sur Mon Convertisseur CO2`}
      result={props.pageContext.equivalent.name.fr}
      breadcrumb={{
        type: 'equivalent',
        category: props.pageContext.category,
        equivalent: props.pageContext.equivalent,
      }}
      image={`/og-images/${props.pageContext.equivalent.slug}.jpeg`}
    >
      <Equivalent
        equivalent={props.pageContext.equivalent}
        category={props.pageContext.category}
      />
    </Web>
  )
}
