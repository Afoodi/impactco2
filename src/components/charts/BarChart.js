import React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'

import Item from './barChart/Item'

export default function BarChart(props) {
  return (
    <Flipper
      className={props.className}
      flipKey={props.items.map((item) => item.id).join()}
    >
      {props.items[0].category > 11 &&
        <Item
          key=""
          title="GUIDE"
          to=" "
          subtitle=""
          emoji="📏"
          secondEmoji=""
          color=""
          value=""
          gmargin="marge brut"
          category="15"
          price="prix"
          usage=""
          max="100"
        />
      }
      {props.items.map((item) => (
        <Flipped flipId={item.id} key={item.id}>
          <Item
            key={item.id}
            onClick={item.onClick}
            to={item.to}
            title={item.title}
            subtitle={item.subtitle}
            emoji={item.emoji}
            secondEmoji={item.secondEmoji}
            color={item.color}
            value={item.value}
            usage={props.items[0].category > 11 ? "" : item.usage}
            gmargin={item.gmargin}
            category={item.category}
            price={item.price}
            component={item.component}
            max={props.max}
          />
        </Flipped>
      ))}
    </Flipper>
  )
}
