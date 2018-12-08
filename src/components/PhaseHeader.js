//@flow
import React                   from 'react'
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
}                              from 'react-native'
import { HeaderBackButton }    from 'react-navigation'
import styles, { bannerColor } from '../styles/components/Banner/phase'
import type { Step }           from '../services/cms'
import ModelHOC                from '../HOC/StepFormModelProvider'
import { compose }             from 'recompose'

type Props = {
  onBackPress: () => any,
  backButton: boolean,
  title: string,
  textColor: string,
  backgroundColor: string,
  titleColor: string,
  steps: Array<Step>,
  headerBackgroundColor: string,
  onSelectStep: Step => any,
  disabled: boolean,
}

const UnconnectedPhaseHeaderButton = ({
  step,
  backgroundColor,
  textColor,
  onPress,
  disabled = false,
}: {
  step: Step,
  backgroundColor: string,
  textColor: string,
  onPress: any,
  disabled: boolean,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.headerStep,
        { backgroundColor },
        disabled ? styles.disabled : {},
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.headerStepText, { color: textColor }]}>{`Step ${
        step.stepId
      }`}</Text>
    </TouchableOpacity>
  )
}

const mergeProps = (Component: React.Node) => {
  const Container = ({ formModel, ...rest }: { formModel: any }) => {
    const disabled = !formModel
    return <Component disabled={disabled} {...rest} />
  }
  return Container
}

const PhaseHeaderButton = compose(ModelHOC, mergeProps)(
  UnconnectedPhaseHeaderButton
)

class PhaseHeader extends React.PureComponent<Props> {
  _onPressStep = step => {
    const { onSelectStep } = this.props
    return () =>
      requestAnimationFrame(() => {
        onSelectStep(step)
      })
  }

  render() {
    const {
      title,
      textColor,
      backgroundColor,
      steps,
      titleColor,
      onBackPress = null,
      backButton = false,
      headerBackgroundColor,
    } = this.props
    return (
      <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
        <StatusBar barStyle="dark-content" backgroundColor={bannerColor} />
        <View style={styles.headerUpperRow}>
          <View style={[styles.headerUpperRowBlock, styles.arrowContainer]}>
            {backButton &&
              onBackPress && (
                <HeaderBackButton
                  tintColor={titleColor}
                  onPress={onBackPress}
                />
              )}
          </View>
          <View style={[styles.headerUpperRowBlock, styles.titleBlock]}>
            <Text style={[styles.headerTitle, { color: titleColor }]}>
              {title}
            </Text>
          </View>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.horizontalScrollContainer}
          style={styles.headerLowerRow}
        >
          {steps &&
            steps.map(step => (
              <PhaseHeaderButton
                key={step.number}
                step={step}
                backgroundColor={backgroundColor}
                textColor={textColor}
                onPress={this._onPressStep(step)}
              />
            ))}
        </ScrollView>
      </View>
    )
  }
}

export default PhaseHeader
