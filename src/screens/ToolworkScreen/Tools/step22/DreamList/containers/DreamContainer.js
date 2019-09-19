// @flow
import React, { memo, useCallback, useContext } from 'react'
import DreamComponent from '../components/DreamComponent'
import { Dream, DreamContext } from '../../context/DreamContext'

type Props = {
  dream: Dream,
}

const DreamContainer = (props: Props) => {
  const { dream } = props
  const { id, bookmark, text, date } = dream
  const { changeBookmark } = useContext(DreamContext)

  const onBookmark = useCallback(
    () => {
      changeBookmark(id)
    },
    [id, changeBookmark]
  )

  return (
    <DreamComponent
      onBookmark={onBookmark}
      bookmark={bookmark}
      text={text}
      date={date}
    />
  )
}

export default memo(DreamContainer)
