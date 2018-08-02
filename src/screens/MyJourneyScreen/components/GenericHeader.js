import React          from 'react'
import { View, Text } from 'react-native'
import styles         from '../styles'

export type HeaderElement = {
  important?: boolean,
  text: string
}

export type HeaderProps = {
  elements: [HeaderElement]
}

const GenericHeader = ({ elements }: HeaderProps) => (
  <View style={styles.row}>
    {elements &&
      elements.map(el => {
        const { important, text } = el
        return (
          <View
            key={text}
            style={[styles.element, important ? styles.pillar : {}]}
          >
            <Text
              style={[
                important ? styles.pillarText : styles.elementText,
                styles.headerRowText
              ]}
            >
              {text}
            </Text>
          </View>
        )
      })}
  </View>
)

export default GenericHeader
