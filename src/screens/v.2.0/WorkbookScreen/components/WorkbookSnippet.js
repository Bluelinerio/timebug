import React                              from 'react'
import { View, Text, ScrollView }         from 'react-native'
import { connectContext }                 from 'react-connect-context'
import { compose, mapProps }              from 'recompose'
import type { Step }                      from '../../../../services/cms'
import Button                             from '../../../../components/Button'
import { splitByLines }                   from '../utils/textSplit'
import { SectionConsumer, SectionValues } from '../context/SectionContext'
import styles                             from '../styles'

export type Props = {
  step: Step,
  phase: string,
  textStyle?: any,
  color: string,
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

const SwitchButton = compose(connectContext(SectionConsumer), mapProps(merge))(
  UnconnectedSwitchButton
)

class WorkbookSnippet extends React.PureComponent<Props> {
  render() {
    const { step, color, textStyle = {} } = this.props
    const paragraphs = splitByLines(step.description)
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.snippetTitleContainer}>
          <Text style={[styles.snippetTitle, textStyle]}>{step.title}</Text>
        </View>
        {paragraphs.map((paragraph, index) => (
          <View key={index} style={styles.snippetParagraph}>
            <Text style={[styles.snippetStyle, textStyle]}>{paragraph}</Text>
          </View>
        ))}
        <SwitchButton text={'Next'} background={color} />
      </ScrollView>
    )
  }
}

export default WorkbookSnippet
