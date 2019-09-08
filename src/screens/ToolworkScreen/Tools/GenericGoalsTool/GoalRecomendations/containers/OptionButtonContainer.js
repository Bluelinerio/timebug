// @flow
import React, { useContext, useMemo } from 'react'
import Button                         from '../../components/OptionButton'
import { ScreenContext }              from '../../context/ScreenContext'
import { FormContext }                from '../../context/FormContext'
import { CategoryContext }            from '../../context/CategoryContext'
import { StyleContext }               from '../../context/StyleContext'

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
  const { setBaseValues, FORM_KEYS } = useContext(FormContext)
  const { color } = useContext(StyleContext)

  const updatedStyle = useMemo(
    () => {
      return {
        ...style,
        text: {
          color,
        },
      }
    },
    [style, color]
  )

  const onPress = () => {
    const base = {
      [FORM_KEYS.category]: {
        value: category,
      },
    }

    if (newGoalButton) {
      setBaseValues(base)
      openForm()
    } else {
      setBaseValues({
        ...base,
        [FORM_KEYS.goal]: {
          value: option,
        },
      })
      openForm()
    }
  }

  return <Button onPress={onPress} text={option} style={updatedStyle} />
}

export default OptionButtonContainer
