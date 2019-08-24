// @flow
import React, { useCallback } from 'react'

export type Recommendation = {
  recommendations: Array<string>,
  category: string,
}

type Props = {
  recommendations?: Array<Recommendation>,
  children: React.ReactChildren,
}

const initialState = {
  recommendations: [],
  getRecommendationsForCategory: () => null,
}

const RecommendationsContext = React.createContext(initialState)

const _RecommendationsProvider = (props: Props) => {
  const { recommendations } = props

  const getRecommendationsForCategory = useCallback(
    (category: string) => {
      const recommendationsLock = recommendations.find(
        r => r.category === category
      )
      if (recommendationsLock) return recommendationsLock.recommendations
      return null
    },
    [recommendations]
  )

  return (
    <RecommendationsContext.Provider
      value={{
        recommendations,
        getRecommendationsForCategory,
      }}
    >
      {props.children}
    </RecommendationsContext.Provider>
  )
}

const RecommendationsProvider = React.memo(_RecommendationsProvider)

export { RecommendationsContext, RecommendationsProvider }
