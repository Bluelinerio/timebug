import React, { useContext, useMemo } from 'react'
import { DreamContext } from '../../context/DreamContext'
import FavoritesList from '../components/FavoritesList'

const FavoritesListContainer = () => {
  const { dreams } = useContext(DreamContext)

  const sorted = useMemo(
    () =>
      dreams
        .filter(dream => dream.bookmark === true)
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)),
    [dreams]
  )

  return <FavoritesList dreams={sorted} />
}

export default FavoritesListContainer
