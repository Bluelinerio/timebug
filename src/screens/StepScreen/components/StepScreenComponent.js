// @flow
import React from 'react'
import { Dimensions } from 'react-native'
import ScrollingHeaderPageComponent from '../../../components/ScrollingHeaderPageComponent'
import ScrollingHeaderPageHeaderComponent from '../../../components/ScrollingHeaderPageHeaderComponent'
import ScrollingHeaderPageContentComponent from '../../../components/ScrollingHeaderPageContentComponent'
import ScrollingHeaderPageHeaderBackgorundComponent from '../../../components/ScrollingHeaderPageHeaderBackgorundComponent'
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from '../../../constants'
import markdownStyles from '../../../styles/Markdown/stepScreen'
import StepScreenButtonContainer from '../containers/StepScreenButtonContainer'

const HEADER_HEIGHT = Dimensions.get('window').height * 0.4

export type Props = {
  headerTitle: string,
  title: string,
  subtitle: string,
  content: string,
  color: string,
  image: { uri: string }
}

const StepScreenComponent = ({
  title,
  headerTitle,
  subtitle,
  content,
  color,
  image
}: Props) => (
  <ScrollingHeaderPageComponent
    headerMaxHeight={HEADER_HEIGHT}
    headerMinHeight={APPBAR_HEIGHT() + STATUSBAR_HEIGHT}
    headerImage={image}
    headerComponent={
      <ScrollingHeaderPageHeaderBackgorundComponent color={color} />
    }
    header={<ScrollingHeaderPageHeaderComponent color={color} title={headerTitle} />}
    content={
      <ScrollingHeaderPageContentComponent
        title={title}
        subtitle={subtitle}
        content={content}
        androidStatusBarColor={color}
        markdownStyles={markdownStyles}
      >
        {<StepScreenButtonContainer />}
      </ScrollingHeaderPageContentComponent>
    }
  />
)

export default StepScreenComponent
