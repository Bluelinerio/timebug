// @flow
import React from 'react'
import { Dimensions } from 'react-native'
import ScrollingHeaderPageComponent from '../../../components/ScrollingHeaderPageComponent'
import ScrollingHeaderPagerHeaderComponent from '../../../components/ScrollingHeaderPagerHeaderComponent'
import ScrollingHeaderPageContentComponent from '../../../components/ScrollingHeaderPageContentComponent'
import ScrollingHeaderPageHeaderComponent from '../../../components/ScrollingHeaderPageHeaderComponent'
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from '../../../constants'
import markdownStyles from '../../../styles/Markdown/stepScreen'
import StepScreenButtonContainer from '../containers/StepScreenButtonContainer'

const HEADER_HEIGHT = Dimensions.get('window').height * 0.4

export type Props = {
  title: string,
  subtitle: string,
  content: string,
  color: string,
  image: { uri: string }
}

const StepScreenComponent = ({
  title,
  subtitle,
  content,
  color,
  image
}: Props) => (
  <ScrollingHeaderPageComponent
    headerMaxHeight={HEADER_HEIGHT}
    headerMinHeight={APPBAR_HEIGHT() + STATUSBAR_HEIGHT}
    headerImage={image}
    headerComponent={<ScrollingHeaderPageHeaderComponent color={color} />}
    header={<ScrollingHeaderPagerHeaderComponent color={color} title={title} />}
    content={
      <ScrollingHeaderPageContentComponent
        title={title}
        subtitle={subtitle}
        content={content}
        color={color}
        markdownStyles={markdownStyles}
      >
        {<StepScreenButtonContainer />}
      </ScrollingHeaderPageContentComponent>
    }
  />
)

export default StepScreenComponent
