// @flow

import React                            from 'react'
import { compose, mapProps }            from 'recompose'
import toolDataProvider                 from '2020_HOC/ToolDataProvider'
import { key as toolKey }               from '2020_static/tools/BoardOfAdvisors'
import CheckinComponent                 from '../components/CheckinComponent'
import type { Props as ComponentProps } from '../components/CheckinComponent'

const merge = (): ComponentProps => {
  const title = 'Much dummy, very test'
  const text = 'This is a dummy component to test the randomization of checkins. If you see this then well done!'

  return {
    title,
    text,
  }
}

type ContainerProps = {
  onLinkPress: () => void,
  link: string,
  title: string,
  text: string,
  source: string,
}

class GoalsCheckinContainer extends React.PureComponent<ContainerProps> {
  onLinkPress = () => {
    const { onLinkPress } = this.props
    onLinkPress()
  }

  render() {
    const { link, title, text, source } = this.props
    return (
      <CheckinComponent
        link={link}
        title={title}
        text={text}
        onLinkPress={this.onLinkPress}
        source={source}
      />
    )
  }
}

export const key = toolKey

export default compose(
  toolDataProvider,
  mapProps(merge)
)(GoalsCheckinContainer)
