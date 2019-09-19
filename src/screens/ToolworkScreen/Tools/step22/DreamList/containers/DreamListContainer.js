import React, { useContext, useMemo } from 'react'
import DreamList from '../components/DreamList'
import { DreamContext } from '../../context/DreamContext'

const DreamListContainer = () => {
  const { dreams } = useContext(DreamContext)

  const sorted = useMemo(
    () => dreams.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)),
    [dreams]
  )

  return <DreamList dreams={sorted} />
}

export default DreamListContainer
