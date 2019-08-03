// @flow
import React, { useContext } from 'react'
import Button                from '../../components/OptionButton'
import { ScreenContext }     from '../../context/ScreenContext'
import { FormContext } from '../../context/FormContext'
import { CategoryContext } from '../../context/CategoryContext'
import { FORM_KEYS } from '../../static/form'

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
  const { category } = useContext(CategoryContext)
  const { setBaseValues } = useContext(FormContext)

  const onPress = () => {
    if (newGoalButton) return openForm()
    else {
      setBaseValues({
        [FORM_KEYS.career_goals_form_goal]: {
          value: option,
        },
        [FORM_KEYS.career_goals_form_career]: {
          value: category,
        },
      })
      openForm()
    }
  }

  return <Button onPress={onPress} text={option} style={style} />
}

export default OptionButtonContainer
