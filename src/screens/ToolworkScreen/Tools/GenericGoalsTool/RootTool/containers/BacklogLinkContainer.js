import React, { useContext, useCallback } from 'react'
import BacklogLink from '../components/BacklogLink'
import { ScreenContext } from '../../context/ScreenContext'
import { StyleContext } from '../../context/StyleContext'

const BacklogLinkContainer = () => {
  const { openBacklog } = useContext(ScreenContext)
  const { color } = useContext(StyleContext)

  const onPress = useCallback(
    () => {
      openBacklog()
    },
    [openBacklog]
  )

  return <BacklogLink onPress={onPress} color={color} />
}

export default BacklogLinkContainer
