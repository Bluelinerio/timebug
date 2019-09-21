// @flow
import React, { useState, useContext, useCallback, useMemo } from 'react'
import uuid from 'uuid/v4'
import moment from 'moment'
import { ToolDataContext } from './ToolDataContext'
import { DATE_FORMAT } from '2020_constants/constants'

export type Dream = {
  id: string,
  date: string,
  text: string,
  bookmark: string,
  timestamp: string,
}

type Props = {
  children: React.ReactChildren,
}

type ProvidedProps = {
  dreams: Array<Dream>,
  storeDream: (text: string) => void,
  changeBookmark: (id: string) => void,
  editDream: (text: string) => void,
  setEditId: (id: string) => void,
  editId: string | null,
}

const initialState: ProvidedProps = {
  dreams: null,
  storeDream: () => null,
  changeBookmark: () => null,
  editDream: () => null,
  setEditId: () => null,
  editId: null,
}

const DreamContext = React.createContext(initialState)

const DreamProvider = (props: Props) => {
  const { data, storeData } = useContext(ToolDataContext)
  const [editId, setEditId] = useState(null)

  const value = data ? data.value : null

  const dreams = useMemo(
    () => {
      return value ? value.dreams : []
    },
    [value]
  )

  const editDream = useCallback(
    (text: string) => {
      const dream = dreams.find(dream => dream.id === editId)

      const newDreams = [
        ...dreams.filter(dream => dream.id !== editId),
        { ...dream, text },
      ]

      const storableData = {
        ...value,
        dreams: newDreams,
      }

      setEditId(null)
      storeData(storableData)
    },
    [editId, storeData, value, dreams]
  )

  const storeDream = useCallback(
    (text: string) => {
      const storableData = {
        ...value,
        dreams: [
          ...dreams,
          {
            id: uuid(),
            text,
            date: moment().format(DATE_FORMAT),
            timestamp: moment().format(),
            bookmark: false,
          },
        ],
      }

      storeData(storableData)
    },
    [storeData, value, dreams]
  )

  const changeBookmark = useCallback(
    (id: string) => {
      const dream = dreams.find(dream => dream.id === id)

      const newDreams = [
        ...dreams.filter(dream => dream.id !== id),
        { ...dream, bookmark: !dream.bookmark },
      ]

      const storableData = {
        ...value,
        dreams: newDreams,
      }

      storeData(storableData)
    },
    [storeData, value, dreams]
  )

  return (
    <DreamContext.Provider
      value={{
        ...this.state,
        dreams,
        storeDream,
        changeBookmark,
        editDream,
        setEditId,
        editId,
      }}
    >
      {props.children}
    </DreamContext.Provider>
  )
}

export { DreamProvider, DreamContext }
