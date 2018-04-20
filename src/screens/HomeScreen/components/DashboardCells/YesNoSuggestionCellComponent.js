// @flow
import * as React from 'react'
import { View } from 'react-native'
import {
  CellContainer,
  Container,
  YesButton,
  NoButton,
  YesDisabled,
  Title,
  triggerAnimation
} from './DashboardViews.js'

const ANSWER_YES = 'ANSWER_YES'
const ANSWER_NO = 'ANSWER_NO'
const NO_ANSWER = 'NO_ANSWER'

type Props = {
  title: string,
  followupYes: string,
  followupNo: string,
  onPressYes: () => void,
  onPressNo: () => void,
  onClose: () => void
}

type State = {
  answer: ANSWER_YES | ANSWER_NO | NO_ANSWER
}

class YesNoSuggestionCellComponent extends React.Component<Props, State> {
  static defaultProps = {
    followupYes: 'Awesome!!',
    followupNo: 'Should I create a reminder?'
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}
            >
              <NoButton />
              <Title title={followupNo} />
            </View>
          </React.Fragment>
        )}
      </CellContainer>
    )
  }
}

export default YesNoSuggestionCellComponent
