//@flow
import React from 'react'
import {
  View,
  Text,
  Picker,
  TouchableOpacity,
  Switch,
  StatusBar,
} from 'react-native'
import ModalSelector from 'react-native-modal-selector'
import moment from 'moment'
import {
  frequencies,
  DAILY,
  WEEKLY,
  BIWEEKLY,
  MONTHLY,
} from '../../../services/checkins'
import type {
  CheckinChangePayload,
  ToggleCheckinPayload,
} from '../../../redux/actions/checkin.actions'
import styles from '../styles'
import checkinStyles from '../styles/CheckinStyles'
import CustomImage from '../../../components/CustomImage'
import {
  getColorForStepAtIndex,
  getTextColorForStepAtIndex,
} from '../../MyJourneyScreen/utils/colorsForStep'

export type CheckinElementProps = {
  checkin: {
    toolKey: string,
    text: string,
    title: string,
    lastCheckin: string,
    nextCheckin: string,
    frequency: DAILY | WEEKLY | MONTHLY | BIWEEKLY,
    step: string,
    message: string,
    onPress: CheckinChangePayload => any,
    onLink: ({ link: string }) => any,
    onToggle: ToggleCheckinPayload => any,
    id: string | null,
  },
  stepColors: any,
  user: any,
  disableLink?: boolean,
}

const operateWithLastCheckin = (
  frequency: string,
  lastCheckin: string
): string => {
  const lastCheckinMoment = moment(lastCheckin)
  switch (frequency) {
  case frequencies[DAILY]:
    return lastCheckinMoment.add(1, 'd').format('MM-DD-YY')
  case frequencies[WEEKLY]:
    return lastCheckinMoment.add(1, 'w').format('MM-DD-YY')
  case frequencies[BIWEEKLY]:
    return lastCheckinMoment
      .add(3, 'd')
      .add('12', 'h')
      .format('MM-DD-YY')
  case frequencies[MONTHLY]:
    return lastCheckinMoment.add(1, 'M').format('MM-DD-YY')
  }
}

const operateCheckinDate = (
  frequency: string,
  lastCheckin: string | null = null
): string => {
  if (lastCheckin) return operateWithLastCheckin(frequency, lastCheckin)
  switch (frequency) {
  case frequencies[DAILY]:
    return moment()
      .add(1, 'd')
      .format('MM-DD-YY')
  case frequencies[WEEKLY]:
    return moment()
      .add(1, 'w')
      .format('MM-DD-YY')
  case frequencies[BIWEEKLY]:
    return moment()
      .add(3, 'd')
      .add('12', 'h')
      .format('MM-DD-YY')
  case frequencies[MONTHLY]:
    return moment()
      .add(1, 'M')
      .format('MM-DD-YY')
  }
}

class CheckinElement extends React.PureComponent<CheckinElementProps> {
  constructor(props) {
    super(props)
    this.state = {
      frequency: props.checkin.frequency,
      isModalOpen: false,
    }
  }

  onChangeValue = value => {
    const frequency = value.key || value

    this.setState({ frequency })
  }

  _onModalOpen = () => {
    this.setState({ isModalOpen: true })
  }

  _onModalClose = () => {
    this.setState({ isModalOpen: false })
  }

  renderiOSPicker = () => {
    const { frequency: localFrequency } = this.state

    const data =
      frequencies &&
      Object.keys(frequencies).map(key => {
        const frequency = frequencies[key]
        return {
          label: frequency,
          key: frequency,
        }
      })

    return (
      data && (
        <ModalSelector
          initValue={localFrequency}
          data={data}
          onChange={this.onChangeValue}
          selectStyle={styles.modalPicker}
          selectTextStyle={styles.modalText}
          onModalOpen={this._onModalOpen}
          onModalClose={this._onModalClose}
        />
      )
    )
  }

  renderAndroidPicker = () => {
    const { frequency: localFrequency } = this.state

    return (
      <Picker
        selectedValue={localFrequency}
        style={styles.picker}
        onValueChange={this.onChangeValue}
      >
        {Object.keys(frequencies).map(key => {
          const frequency = frequencies[key]
          return <Picker.Item key={key} label={frequency} value={frequency} />
        })}
      </Picker>
    )
  }

  backgroundColorAtIndex = (stepIndex: Number) => {
    const { stepColors, user } = this.props
    return stepColors[getColorForStepAtIndex(stepIndex, user)]
  }

  textColorAtIndex = (stepIndex: number) => {
    const { user } = this.props
    return getTextColorForStepAtIndex(stepIndex, user)
  }

  render() {
    const { checkin, disableLink = true } = this.props
    const {
      text,
      title,
      lastCheckin,
      frequency,
      onPress,
      onLink,
      step,
      message,
      toolKey,
      action,
      onToggle,
      id,
    } = checkin
    const { frequency: localFrequency, isModalOpen } = this.state
    const { number, icon } = step
    const containerBackgroundColor = this.backgroundColorAtIndex(number - 1)
    const source = icon && icon.uri
    const textStyle = this.textColorAtIndex(number - 1)

    return (
      <View
        style={[
          checkinStyles.button,
          { backgroundColor: containerBackgroundColor },
        ]}
      >
        {isModalOpen && (
          <StatusBar barStyle="light-content" backgroundColor={'#212121'} />
        )}
        <View style={checkinStyles.mainComponent}>
          <View style={checkinStyles.mainComponentTopRow}>
            <View style={[checkinStyles.buttonImageContainer]}>
              <CustomImage
                style={[checkinStyles.buttonImage]}
                source={source}
                showWebviewLoader
              />
            </View>
            <View style={checkinStyles.buttonTextContainer}>
              <View style={checkinStyles.titleWrapper}>
                <TouchableOpacity
                  onPress={disableLink ? () => null : onLink}
                  style={styles.pressableTitleWrapper}
                >
                  <View>
                    <Text
                      style={[
                        checkinStyles.stepText,
                        checkinStyles.buttonText,
                        styles.title,
                        textStyle,
                      ]}
                    >
                      {title}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.switchContainer}>
                  <Switch
                    style={styles.centeredContainer}
                    onValueChange={() => {
                      onToggle({
                        step: number,
                        checkin: {
                          message,
                          toolKey,
                          action,
                          frequency: localFrequency,
                        },
                      })
                    }}
                    value={!!id}
                  />
                </View>
              </View>
              <View style={[checkinStyles.subtitleWrapper]}>
                <View style={styles.pickerContainer}>
                  {this.renderiOSPicker()}
                </View>
                <View style={styles.dateContainer}>
                  <Text
                    style={[
                      styles.date,
                      frequency !== localFrequency ? styles.changedDate : {},
                      textStyle,
                    ]}
                  >
                    {!!id && operateCheckinDate(localFrequency, lastCheckin)}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    onPress({
                      message,
                      action,
                      toolKey,
                      step: number,
                      frequency: localFrequency,
                    })
                  }
                  disabled={frequency === localFrequency}
                  style={[styles.centeredContainer, styles.saveButtonContainer]}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      frequency !== localFrequency
                        ? styles.saveText
                        : styles.saveTextDisabled,
                    ]}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={[
              checkinStyles.container,
              checkinStyles.mainComponentBottomRow,
            ]}
          >
            <Text
              style={[
                checkinStyles.subtitle,
                checkinStyles.buttonText,
                textStyle,
              ]}
            >
              {text}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default CheckinElement
