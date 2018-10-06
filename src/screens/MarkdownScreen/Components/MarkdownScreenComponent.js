//@flow
import * as React                                   from 'react'
import { View }                                     from 'react-native'
import Markdown                                     from '../../../Modules/Markdown'
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT }          from '../../../constants'
import ScrollingHeaderPageComponent                 from '../../../components/ScrollingHeaderPageComponent'
import ScrollingHeaderPageContentComponent          from '../../../components/ScrollingHeaderPageContentComponent'
import ScrollingHeaderPageHeaderComponent           from '../../../components/ScrollingHeaderPageHeaderComponent'
import ScrollingHeaderPageHeaderBackgorundComponent from '../../../components/ScrollingHeaderPageHeaderBackgorundComponent'
import { HEADER_HEIGHT }                            from '../styles'

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
  headerTitle?: string,
  title?: string,
  subtitle?: string,
  content?: string,
  color?: string,
  image?: { uri: string } | number,
  markdownStyles?: {}
}

const MarkdownScreenComponent = ({
  headerTitle,
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
          <ScrollingHeaderPageHeaderBackgorundComponent color={color} />
        }
        header={
          <ScrollingHeaderPageHeaderComponent
            color={color}
            title={headerTitle}
          />
        }
        content={
          <ScrollingHeaderPageContentComponent
            title={title}
            subtitle={subtitle}
            content={content}
            androidStatusBarColor={color}
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
