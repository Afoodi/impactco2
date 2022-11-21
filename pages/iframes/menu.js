import React from 'react'

import Iframe from 'components/layout/Iframe'
import Categories from 'components/misc/Categories'

export default function CategoryIframe(props) {
  return (
    <Iframe url="categories">
      <Categories main iframe />
    </Iframe>
  )
}
