import React, { useContext, useCallback } from 'react'
import BacklogLink from '../components/BacklogLink'
import { ScreenContext } from '../../context/ScreenContext'

const BacklogLinkContainer = () => {
  const { openBacklog } = useContext(ScreenContext)

  const onPress = useCallback(
    () => {
      openBacklog()
    },
    [openBacklog]
  )

  return <BacklogLink onPress={onPress} />
}

export default BacklogLinkContainer
