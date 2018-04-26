// @flow
import * as React      from 'react'
import { Text, View }  from 'react-native'
import styles          from '../styles'
import dashboardStyles from '../../styles/dashbaord.styles'
import Button          from '../../../components/Button'

export type Props = {
  title: string,
  buttonTitle: string,
  backgroundColor: string,
  textColor: string,
  buttonOnPress: () => void
}

const WorkbookDoneScreen = ({
  backgroundColor,
  textColor,
  title,
  buttonTitle,
  buttonOnPress
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor
        }
      ]}
    >
      <View style={styles.messageContainer}>
        <Text style={[dashboardStyles.title, dashboardStyles.strong, { color: 'white' }]}>
          {title}
        </Text>
      </View>
      <View style={[styles.absoluteContainer]}>
        <Button
          onPress={buttonOnPress}
          text={buttonTitle}
          backgroundColor={'white'}
          textColor={textColor}
        />
      </View>
    </View>
  )
}

export default WorkbookDoneScreen
