import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'
import Emoji from './item/Emoji'
import Title from './item/Title'
import Bar from './item/Bar'
import useIframe from 'hooks/useIframe'

const Wrapper = styled(MagicLink)`
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0.875rem 0.875rem 1rem;
  text-decoration: none;
  background-color: ${(props) =>
    props.current ? props.theme.colors.second : 'transparent'};
  border-radius: 1rem;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.mainLight};
  }

  ${(props) => props.theme.mq.small} {
    padding: 0.25rem 0.125rem 1rem;
  }
`
const ChartWrapper = styled.div`
  flex: 1;
`
export default function Item(props) {
  const iframe = useIframe()
  const marginBarSize = (
    props.gmargin == "marge brut" ? 0.9 : props.gmargin ** 10 / 100 ** 9.4
  )
  const ecoBarSize = (
    props.value == 0 ? 0.8 :
      0.6 ** 3 / props.value + (props.value < 0.3 ? -0.10 : 0.08)
  )
  const colours = { 
    "blue": "#4EB3EA",
    "red": "#FF6F59",
    "orange": "#FF8E72",
    "darkgreen": "#254441",
    "green": "#43AA8B",
    "lightgreen": "#377771",
  }
  return (
    <Wrapper
      {...props}
      to={(iframe ? '/iframes' : '') + props.to}
      onClick={props.onClick || null}
      noIcon
    >
      <Emoji emoji={props.emoji} secondEmoji={props.secondEmoji} />
      <ChartWrapper>
        <Title
          title={props.title}
          subtitle={props.subtitle}
          component={props.component}
          price={props.price}
        />
        {props.category > 11 &&
          <Bar
            value={props.gmargin}
            size={marginBarSize}
            max={1001}
            usageColor={colours.red}
            color={(props.gmargin < 73 ? colours.red : colours.lightgreen)}
          />
        }
        <Bar
          value={props.value}
          size={ecoBarSize}
          max={props.max}
          color={(props.value >= 1.2 ? colours.orange : colours.green)}
          usageColor={(props.category > 11 ? colours.red : props.color)}
        />
      </ChartWrapper>
    </Wrapper>
  )
}
