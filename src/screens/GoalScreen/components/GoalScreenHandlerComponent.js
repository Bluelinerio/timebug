import React from 'react'
import { View } from 'react-native'
import R from 'ramda'
import ScreenLockedContainer from '../containers/ScreenLockedContainer'
import GoalListComponent from '../containers/GoalListContainer'

type GoalScreenHandlerComponentProps = {
  data: any
}

const GoalScreenHandlerComponent = (props: GoalScreenHandlerComponentProps) => {
  const { data } = props
  return (
    <View>
      {R.isEmpty(data) ? <ScreenLockedContainer /> : <GoalListComponent data={data} />}
    </View>
  )
}

export default GoalScreenHandlerComponent
