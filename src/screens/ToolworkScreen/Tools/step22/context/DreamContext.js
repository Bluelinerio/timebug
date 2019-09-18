// @flow
import React, { useContext, useCallback, useMemo } from 'react'
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
}

const initialState: ProvidedProps = {
  dreams: null,
  storeDream: () => null,
  changeBookmark: () => null,
}

const DreamContext = React.createContext(initialState)

const DreamProvider = (props: Props) => {
  const { data, storeData } = useContext(ToolDataContext)
  const value = data ? data.value : null

  const dreams = useMemo(
    () => {
      return value ? value.dreams : []
    },
    [value]
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
        dreams.filter(dream => dream.id !== id),
        { ...dream, bookmark: !dream.bookmark },
      ]

      const storableData = {
        ...data,
        value: {
          ...value,
          dreams: newDreams,
        },
      }

      storeData(storableData)
    },
    [storeData, value, dreams]
  )

  return (
    <DreamContext.Provider
      value={{ ...this.state, dreams, storeDream, changeBookmark }}
    >
      {props.children}
    </DreamContext.Provider>
  )
}

export { DreamProvider, DreamContext }
