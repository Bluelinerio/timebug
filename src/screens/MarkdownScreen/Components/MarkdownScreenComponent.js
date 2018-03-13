import * as React from 'react'
import { View, ScrollView, Text, StatusBar, StyleSheet } from 'react-native'

import CustomImage from '../../../components/CustomImage'
import Markdown from '../../../Modules/Markdown'
import styles, { HEADER_HEIGHT } from '../styles'
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from '../../../constants'
import ScrollableHeader from '../../../components/ScrollableHeader'

export type Props = {
  title: string,
  subtitle: string,
  content: string,
  icon: { uri: string },
  color: string
}

const PageContent = ({ content, markdownStyles, color }) => (
  <View style={{ flex: 1 }}>
    <StatusBar translucent barStyle="dark-content" backgroundColor={color} />
    <ScrollView
      automaticallyAdjustContentInsets={true}
      style={styles.scrollView}
    >
      <Markdown markdownStyles={markdownStyles}>{content}</Markdown>
    </ScrollView>
  </View>
)

const ScrollableHeaderContent = ({
  title,
  subtitle,
  content,
  color,
  markdownStyles
}) => (
  <View style={styles.content}>
    <StatusBar
      translucent
      barStyle="light-content"
      backgroundColor={'transparent'}
    />
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

const Header = ({ icon, title, color }) => (
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

export default ({
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
