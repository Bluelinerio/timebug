// @flow
import React, { useCallback, useContext } from 'React'
import Dreambook from '../components/Dreambook'
import { DreamContext } from '../../context/DreamContext'

const DreambookContainer = () => {
  const { storeDream } = useContext(DreamContext)

  const onPress = useCallback(
    (text: string) => {
      storeDream(text)
    },
    [storeDream]
  )

  return <Dreambook onPress={onPress} />
}

export default DreambookContainer
