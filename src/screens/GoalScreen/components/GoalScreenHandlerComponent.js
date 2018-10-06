import React                 from 'react'
import { View, Text }        from 'react-native'
import R                     from 'ramda'
import ScreenLockedContainer from '../containers/ScreenLockedContainer'
import tron                  from 'reactotron-react-native'

type GoalScreenHandlerComponentProps = {
  data: any
}

const GoalScreenHandlerComponent = (props: GoalScreenHandlerComponentProps) => {
  const { data } = props
  tron.log(props)
  return (
    <View>
      {R.isEmpty(data) ? (
        <ScreenLockedContainer />
      ) : (
        <Text>You did complete step 5 </Text>
      )}
    </View>
  )
}

export default GoalScreenHandlerComponent
