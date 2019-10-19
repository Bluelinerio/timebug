// @flow
import React, { useCallback, useContext, useMemo, useEffect } from 'react'
import Dreambook from '../components/Dreambook'
import { DreamContext } from '../../context/DreamContext'

const DreambookContainer = () => {
  const { storeDream, dreams, editDream, editId, setEditId } = useContext(
    DreamContext
  )

  const dream = useMemo(
    () => {
      return editId ? dreams.find(d => d.id === editId) : null
    },
    [dreams, editId]
  )

  const onPress = useCallback(
    (text: string) => {
      if (editId) editDream(text)
      else storeDream(text)
    },
    [storeDream]
  )

  const text = useMemo(
    () => {
      return dream ? dream.text : ''
    },
    [dream]
  )

  const buttonText = useMemo(
    () => {
      return editId ? 'Edit this dream' : 'Save new dream'
    },
    [editId]
  )

  useEffect(() => () => {
    if (editId) setEditId(null)
  })

  return <Dreambook onPress={onPress} text={text} buttonText={buttonText} />
}

export default DreambookContainer
