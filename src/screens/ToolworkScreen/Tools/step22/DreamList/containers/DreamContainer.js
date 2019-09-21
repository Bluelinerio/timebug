// @flow
import React, { memo, useCallback, useContext } from 'react'
import DreamComponent from '../components/DreamComponent'
import { Dream, DreamContext } from '../../context/DreamContext'
import { ScreenContext } from '../../context/ScreenContext'

type Props = {
  dream: Dream,
}

const DreamContainer = (props: Props) => {
  const { dream } = props
  const { id, bookmark, text, date } = dream
  const { changeBookmark, setEditId } = useContext(DreamContext)
  const { openDreambook } = useContext(ScreenContext)

  const onBookmark = useCallback(
    () => {
      changeBookmark(id)
    },
    [id, changeBookmark]
  )

  const onEdit = useCallback(
    () => {
      setEditId(id)
      openDreambook()
    },
    [openDreambook, setEditId, id]
  )

  return (
    <DreamComponent
      onBookmark={onBookmark}
      bookmark={bookmark}
      text={text}
      date={date}
      onEdit={onEdit}
    />
  )
}

export default memo(DreamContainer)
