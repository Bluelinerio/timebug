import React, { useContext, useMemo } from 'react'
import DreamList from '../components/DreamList'
import { DreamContext } from '../../context/DreamContext'

const DreamListContainer = () => {
  const { dreams } = useContext(DreamContext)

  const sorted = useMemo(
    () => dreams.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)),
    [dreams]
  )

  return <DreamList dreams={sorted} />
}

export default DreamListContainer
