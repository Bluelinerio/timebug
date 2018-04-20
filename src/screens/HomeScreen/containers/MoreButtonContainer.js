import * as React from 'react'
import { connect } from 'react-redux'
import { compose, branch, renderNothing, mapProps } from 'recompose'
import { withNavigation } from 'react-navigation'
import { randomItem } from '../../../utils/random'
import CheckinExerciseCellContainer from './CheckinExerciseCellContainer'
import HowAreYouFeelingSuggestionCellContainer from './HowAreYouFeelingSuggestionCellContainer'
import WhereToStartSuggestionCellContainer from './WhereToStartSuggestionCellContainer'

const MoreButtonContainer = ({ onClose } : { onClose: () => void }) => (
  <CheckinExerciseCellContainer onClose={onClose} />
)

export default MoreButtonContainer
