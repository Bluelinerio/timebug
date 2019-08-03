// @flow
import React, { useContext } from 'react'
import Button                from '../../components/OptionButton'
import { ScreenContext }     from '../../context/ScreenContext'

type Props = {
  option?: string,
  newGoalButton?: boolean,
  style: {
    text: any,
    button: any,
  },
}

const OptionButtonContainer = (props: Props) => {
  const { option, newGoalButton = false, style = {} } = props
  const { openForm } = useContext(ScreenContext)

  const onPress = () => {
    if (newGoalButton) return openForm()
    else {
      // set goal title
      openForm()
    }
  }

  return <Button onPress={onPress} text={option} style={style} />
}

export default OptionButtonContainer
