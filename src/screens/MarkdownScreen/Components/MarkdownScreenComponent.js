//@flow
import * as React from 'react'
import { View, ScrollView } from 'react-native'

import CustomImage from '../../../components/CustomImage'
import Markdown from '../../../Modules/Markdown'
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from '../../../constants'
import ScrollingHeaderPageComponent from '../../../components/ScrollingHeaderPageComponent'
import ScrollingHeaderPageContentComponent from '../../../components/ScrollingHeaderPageContentComponent'
import ScrollingHeaderPagerHeaderComponent from '../../../components/ScrollingHeaderPagerHeaderComponent'
import styles, { HEADER_HEIGHT } from '../styles'

export type PageContentProps = {
  markdownStyles: any,
  content: string
}

const PageContent = ({
  content,
  markdownStyles
}: PageContentProps): React.Node => (
  <View style={{ flex: 1 }}>
    <Markdown markdownStyles={markdownStyles}>{content}</Markdown>
  </View>
)

type Props = {
  title?: string,
  subtitle?: string,
  content?: string,
  color?: string,
  image?: { uri: string } | number,
  markdownStyles?: {}
}

const MarkdownScreenComponent = ({
  title,
  subtitle,
  content,
  color,
  image,
  markdownStyles
}: Props) => {
  if (image) {
    return (
      <ScrollingHeaderPageComponent
        headerMaxHeight={image ? HEADER_HEIGHT : HEADER_HEIGHT}
        headerMinHeight={APPBAR_HEIGHT() + STATUSBAR_HEIGHT}
        headerImage={image}
        headerComponent={
          <View
            style={[
              styles.header,
              {
                backgroundColor: color
              }
            ]}
          />
        }
        header={
          <ScrollingHeaderPagerHeaderComponent color={color} title={title} />
        }
        content={
          <ScrollingHeaderPageContentComponent
            title={title}
            subtitle={subtitle}
            content={content}
            color={color}
          />
        }
      />
    )
  } else {
    return (
      <PageContent
        content={content}
        color={color}
        markdownStyles={markdownStyles}
      />
    )
  }
}

export default MarkdownScreenComponent
