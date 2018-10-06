// Remove this disable once this file is taken again
/* eslint-disable react/jsx-key */

import * as React                              from 'react'
import { connect }                             from 'react-redux'
import { randomItem }                          from '../../../utils/random'
import CheckinExerciseCellContainer            from './CheckinExerciseCellContainer'
import HowAreYouFeelingSuggestionCellContainer from './HowAreYouFeelingSuggestionCellContainer'
import WhereToStartSuggestionCellContainer     from './WhereToStartSuggestionCellContainer'
import SwipablyDiscardableRow                  from '../../../components/SwipablyDiscardableRow'
import { lastStepGuideVisited }                from '../../../redux/selectors/agregates'
import selectors                               from '../../../redux/selectors'

const pickSuggestion = state => ({
  lastStepGuideVisited: lastStepGuideVisited(state),
  hasCompletedForms: selectors.hasCompletedForms(state)
})

/*
(!props.lastStepGuideVisited ? (
          <WhereToStartSuggestionCellContainer {...props} />
        ) : (
          <CheckinExerciseCellContainer {...props} />
        ),
        randomItem([
          <CheckinExerciseCellContainer {...props} />,
          <HowAreYouFeelingSuggestionCellContainer {...props} />
        ]))
*/

// const yestrdayCheckinWasAlreadySubmitted = () => true
// const itIsTimeToAskForYesterdaysCheking = () => true // noon.

// // feedlin:
// if (yestrdayCheckinWasAlreadySubmitted() === false) {
//   if (itIsTimeToAskForYesterdaysCheking() === true) {
//     <HowAreYouFeelingSuggestionCellContainer day={Yesterday} />
//   }
// }


//NOTE: To show the CheckinExcerciseCell and HowAreYouFeelingContainer, delete the prop Show and it's check

const SuggestionCellPicker = (props: {
  lastStepGuideVisited: {},
  hasCompletedForms: boolean,
  onClose: () => void,
  show: boolean
}) => {
  return (
    <SwipablyDiscardableRow onClose={props.onClose}>
      {!props.lastStepGuideVisited && !props.hasCompletedForms? (
        <WhereToStartSuggestionCellContainer {...props} />
      ) : props.show && (
        randomItem([
          <CheckinExerciseCellContainer {...props} />,
          <HowAreYouFeelingSuggestionCellContainer {...props} />
        ])
      )}
    </SwipablyDiscardableRow>
  )
}
const SuggestionCellContainer = connect(pickSuggestion)(SuggestionCellPicker)

export default SuggestionCellContainer
