import React                              from 'react'
import { View, Text, ScrollView }         from 'react-native'
import styles                             from '../styles'
import type { Step }                      from '../../../../services/cms'
import Button                             from '../../../../components/Button'
import { connectContext }                 from 'react-connect-context'
import { SectionConsumer, SectionValues } from '../context/SectionContext'
import { compose, mapProps }              from 'recompose'

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
            <Text style={[styles.snippetStyle, textStyle]}>
              {step.description}
            </Text>
          </View>
          <SwitchButton text={'Next'} background={color} />
        </View>
      </ScrollView>
    )
  }
}

export default WorkbookSnippet
