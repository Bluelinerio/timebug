// @flow
import React, { useMemo } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { compose, mapProps } from 'recompose'
import Markdown from 'react-native-markdown-renderer'
import Button from '../../../../components/Button'
import type { Step } from '../../../../services/cms'
import { SectionValues } from '../context/SectionContext'
import styles from '../styles'
import { headerBackgrounds } from '../../../../resources/images'

export type Props = {
  step: Step,
  phase: string,
  textStyle?: any,
  color: string,
  changeSection: string => any,
  backgroundColor: any,
}

type SwitchButtonProps = {
  onPress: () => any,
  text: string,
  background: string,
}

const UnconnectedSwitchButton = (props: SwitchButtonProps) => {
  const { onPress, text, background } = props
  return (
    <View style={styles.snippetButtonContainer}>
      <Button backgroundColor={background} onPress={onPress} text={text} />
    </View>
  )
}

const merge = (props: SwitchButtonProps) => {
  const { changeSection } = props
  const to = SectionValues.form
  const onPress = () => changeSection(to)
  return {
    ...props,
    onPress,
  }
}

const SwitchButton = compose(mapProps(merge))(UnconnectedSwitchButton)

const WorkbookSnippet = (props: Props) => {
  const { step, color, textStyle = {}, changeSection, backgroundColor } = props

  const changedMarkdownStyles = useMemo(
    () => {
      return {
        text: {
          ...textStyle,
          fontFamily: 'Metropolis',
          fontSize: 15,
        },
        paragraph: {
          ...textStyle,
          fontFamily: 'Metropolis',
          marginVertical: 6,
        },
        u: {
          ...textStyle,
          fontFamily: 'Metropolis',
          fontWeight: '700',
        },
        strong: {
          fontFamily: 'Metropolis',
          fontWeight: '700',
        },
      }
    },
    [textStyle]
  )
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollView}
    >
      <View style={styles.marginScrollViewElement}>
        <View style={styles.actualSnippetContainer}>
          <Text style={[styles.actualSnippetText, textStyle]}>
            {step.snippet}
          </Text>
        </View>
        <View style={styles.snippetParagraph}>
          <Markdown style={changedMarkdownStyles}>{step.description}</Markdown>
        </View>
        <SwitchButton
          text={'Next'}
          background={color}
          changeSection={changeSection}
        />
        <View style={[styles.backgroundImageContainer]}>
          <Image
            source={headerBackgrounds[step.number]}
            style={[styles.backgroundImage, { tintColor: backgroundColor }]}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default React.memo(WorkbookSnippet)
