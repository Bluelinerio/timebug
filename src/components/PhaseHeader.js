//@flow
import React                                 from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import { HeaderBackButton }                  from 'react-navigation'
import styles, { bannerColor }               from '../styles/components/Banner/phase'
import type { Step }                         from '../services/cms'

type Props = {
  onBackPress: () => any,
  backButton: boolean,
  title: string,
  textColor: string,
  backgroundColor: string,
  titleColor: string,
  steps: Array<Step>
}

class PhaseHeader extends React.PureComponent<Props> {
  render() {
    const {
      title,
      textColor,
      backgroundColor,
      steps,
      titleColor,
      onBackPress = null,
      backButton = false
    } = this.props
    return (
      <View style={styles.header}>
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
              <View
                key={step.number}
                style={[styles.headerStep, { backgroundColor }]}
              >
                <Text
                  style={[styles.headerStepText, { color: textColor }]}
                >{`Step ${step.stepId}`}</Text>
              </View>
            ))}
        </ScrollView>
      </View>
    )
  }
}

export default PhaseHeader
