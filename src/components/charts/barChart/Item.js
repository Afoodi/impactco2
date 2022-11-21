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
  const marginBarSize = (props.gmargin == "marge brut" ? 0.9 : props.gmargin ** 16 / 100 ** 15)
  const ecoBarSize = (props.value == 0 ? 0.8 : 0.25 / props.value)
  return (
    <Wrapper
      {...props}
      to={(iframe ? 'https://impactco2.fr' : '') + props.to}
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
            max={props.gmargin == "marge brut" ? 100 : 100 ** 14.2}
            usage={(props.gmargin <= 70 ? 5 : null)}
            usageColor="#E73535"
            color="#4EB3EA"
          />
        }
        <Bar
          value={props.value}
          usage={(props.category > 11 && props.value > 1 ? props.value / 3 : props.usage)}
          size={ecoBarSize}
          max={props.max}
          color={(props.category > 11 ? "#C1D973" : props.color)}
          usageColor={(props.category > 11 ? "#E73535" : props.color)}
        />
      </ChartWrapper>
    </Wrapper>
  )
}
