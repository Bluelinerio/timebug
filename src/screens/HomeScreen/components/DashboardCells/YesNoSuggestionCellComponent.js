// @flow
import * as React from 'react'
import { View } from 'react-native'
import {
  CellContainer,
  Container,
  YesButton,
  NoButton,
  Title,
} from './DashboardViews.js'
import {
  triggerAnimation
} from '../../../styles'
import Meditator from '../../../../components/Meditator'
import { goToMeditation } from '../../../../redux/actions/nav.actions'

const ANSWER_YES = 'ANSWER_YES'
const ANSWER_NO = 'ANSWER_NO'
const NO_ANSWER = 'NO_ANSWER'

type Props = {
  title: string,
  followupYes: string,
  followupNo: string,
  onPressYes: () => void,
  onPressNo: () => void,
  onClose: () => void,
  dispatch: any => void
}

type State = {
  answer: ANSWER_YES | ANSWER_NO | NO_ANSWER
}

class YesNoSuggestionCellComponent extends React.Component<Props, State> {
  static defaultProps = {
    followupYes: 'Awesome!!',
    followupNo: 'Meditate Now?'
  }

  state = {
    answer: NO_ANSWER
  }

  answerNo = () => {
    this.setState({ answer: ANSWER_NO }, () => {
      triggerAnimation()
      this.props.onPressYes && this.props.onPressYes
    })
  }
  answerYes = () => {
    this.setState({ answer: ANSWER_YES }, () => {
      triggerAnimation()
      this.props.onPressNo && this.props.onPressNo()
    })
  }
  tmpMeditate = () => {
    this.props.dispatch(goToMeditation())
    this.props.onClose()
  }
  render() {
    const { title, followupNo, followupYes, ...rest } = this.props
    const { answer } = this.state
    return (
      <CellContainer {...rest}>
        {answer === NO_ANSWER && (
          <React.Fragment>
            <Title title={title} />
            <Container>
              <YesButton onPress={this.answerYes} />
              <NoButton onPress={this.answerNo} />
            </Container>
          </React.Fragment>
        )}
        {answer === ANSWER_YES && (
          <React.Fragment>
            <View
              style={{
                left: 5,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}
            >
              <YesButton />
              <Title title={followupYes} />
            </View>
          </React.Fragment>
        )}
        {answer === ANSWER_NO && (
          <React.Fragment>
            <Title title={followupNo} />
            <Meditator />
            <Container>
              <YesButton onPress={this.tmpMeditate} />
              <NoButton onPress={this.props.onClose} />
            </Container>
          </React.Fragment>
        )}
      </CellContainer>
    )
  }
}

export default YesNoSuggestionCellComponent
