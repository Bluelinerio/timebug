// @flow
import React                            from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon                             from 'react-native-vector-icons/Ionicons'
import { SECTIONS }                     from '../constants'
import commonStyles, { iconColor }      from '../../common/styles'
import styles                           from '../styles'

type Props = {
  onBack: () => any,
  display: boolean,
  hideBar: boolean,
  setCompletedSection: () => any,
  setBacklogSection: () => any,
  selectedSection: string,
}

class SubHeader extends React.PureComponent<Props> {
  render() {
    const {
      onBack,
      display = true,
      hideBar = false,
      selectedSection,
      setCompletedSection,
      setBacklogSection,
    } = this.props
    return display ? (
      <View
        style={[
          commonStyles.container,
          hideBar ? styles.smallHeader : styles.headerArea,
        ]}
      >
        {!hideBar && (
          <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tab} onPress={setCompletedSection}>
              <Text
                style={
                  selectedSection === SECTIONS.COMPLETED
                    ? styles.tabText
                    : styles.tabTextUnselected
                }
              >
                Completed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab2} onPress={setBacklogSection}>
              <Text
                style={
                  selectedSection === SECTIONS.BACKLOG
                    ? styles.tabText
                    : styles.tabTextUnselected
                }
              >
                Backlog
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={[commonStyles.container, styles.subHeader]}>
          <View style={styles.buttonHeaderArea}>
            <TouchableOpacity onPress={onBack}>
              <Icon name={'ios-arrow-back'} size={24} color={iconColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ) : null
  }
}

export default SubHeader
