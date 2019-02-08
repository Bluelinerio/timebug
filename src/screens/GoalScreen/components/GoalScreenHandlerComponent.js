// @flow
import React                 from 'react'
import { View }              from 'react-native'
import ScreenLockedContainer from '../containers/ScreenLockedContainer'
import ToolRedirect          from '../containers/ToolRedirectContainer'
import styles                from '../styles'

type GoalScreenHandlerComponentProps = {
  data: any | null,
}

const GoalScreenHandlerComponent = (props: GoalScreenHandlerComponentProps) => {
  const { data } = props
  return (
    <View style={styles.handlerContainer}>
      {!data ? <ScreenLockedContainer /> : <ToolRedirect />}
    </View>
  )
}

export default GoalScreenHandlerComponent
