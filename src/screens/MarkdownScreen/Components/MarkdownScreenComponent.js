import * as React from 'react'
import { View, ScrollView, Text, StatusBar, StyleSheet } from 'react-native'

import CustomImage from '../../../components/CustomImage'
import Markdown from '../../../Modules/Markdown'
import styles, { HEADER_HEIGHT } from '../styles'
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from '../../../constants'
import ScrollableHeader from '../../../components/ScrollableHeader'

export type PageContentProps = {
  markdownStyles: any,
  content: string
}

const PageContent = ({
  content,
  markdownStyles
}: PageContentProps): React.Node => (
  <View style={{ flex: 1 }}>
    <ScrollView
      automaticallyAdjustContentInsets={true}
      style={styles.scrollView}
    >
      <Markdown markdownStyles={markdownStyles}>{content}</Markdown>
    </ScrollView>
  </View>
)

type ScrollableHeaderContentProps = {
  title: string,
  subtitle: string,
  content: string,
  color: string,
  markdownStyles: any
}

const ScrollableHeaderContent = ({
  title,
  subtitle,
  content,
  color,
  markdownStyles
}: ScrollableHeaderContentProps): React.Node => (
  <View style={styles.content}>
    <StatusBar barStyle="light-content" backgroundColor={color} />
    {subtitle && (
      <Text
        style={[
          styles.subtitle,
          {
            color
          }
        ]}
      >
        {subtitle}
      </Text>
    )}
    {title && <Text style={[styles.title]}>{title}</Text>}
    <ScrollView style={styles.scrollView}>
      <Markdown markdownStyles={markdownStyles}>{content}</Markdown>
    </ScrollView>
  </View>
)

type HeaderProps = {
  icon?: { uti: string },
  color: string
}

const Header = ({ icon, color }: HeaderProps): React.Node => (
  <View
    style={[
      styles.header,
      {
        backgroundColor: color
      }
    ]}
  >
    {icon && (
      <CustomImage backgroundColor={color} style={styles.image} source={icon} />
    )}
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
      <ScrollableHeader
        headerMaxHeight={image ? HEADER_HEIGHT : 0}
        headerMinHeight={image ? APPBAR_HEIGHT + STATUSBAR_HEIGHT : 0}
        headerImage={image}
        headerComponent={<Header color={color} />}
        header={
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: color
            }}
          />
        }
        content={
          <ScrollableHeaderContent
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
