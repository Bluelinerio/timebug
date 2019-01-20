import React from 'react'

type Props = {
  total: number,
  onTimerFinish: () => any,
  disableTimer: boolean,
}

const PLAYING = 'PLAYING'
const PAUSED = 'PAUSED'
const FINISHED = 'FINISHED'

export const TIMER_STATUS = {
  PLAYING,
  PAUSED,
  FINISHED,
}

const TimerHOC = (Component: React.node<any>) => {
  class TimerWrapper extends React.PureComponent<Props> {
    constructor(props) {
      super(props)
      const disabled = props.disableTimer === true
      this.state = {
        totalLength: disabled ? 0 : props.total || 1,
        currentPosition: 0,
        status: disabled ? TIMER_STATUS.FINISHED : TIMER_STATUS.PAUSED,
      }
      this.interval = null
    }

    _clearInterval = () => {
      clearInterval(this.interval)
      this.interval = null
    }

    _onTimerFinish = () => {
      const { onTimerFinish } = this.props
      this.setState({ status: TIMER_STATUS.FINISHED, isFinished: true }, () => {
        this._clearInterval()
        onTimerFinish()
      })
    }

    _toggleTimer = () => {
      const { status } = this.state
      if (status === TIMER_STATUS.FINISHED) return
      if (status === TIMER_STATUS.PAUSED) {
        this.setState({ status: TIMER_STATUS.PLAYING }, () => {
          this.interval = setInterval(
            () =>
              this.setState(prevState => ({
                currentPosition: prevState.currentPosition + 1,
              })),
            1000
          )
        })
      } else {
        this.setState({ status: TIMER_STATUS.PAUSED }, () => {
          clearInterval(this.interval)
          this.interval = null
        })
      }
    }

    componentDidUpdate() {
      if (
        this.state.status !== TIMER_STATUS.FINISHED &&
        this.state.totalLength - this.state.currentPosition === 0
      ) {
        this._onTimerFinish()
      }
    }

    componentWillUnmount() {
      this._clearInterval()
    }

    render() {
      const { status, totalLength, currentPosition } = this.state
      /* eslint-disable-next-line */
      const { total, ...rest } = this.props
      return (
        <Component
          timerStatus={status}
          timeLeft={totalLength - currentPosition}
          toggleTimer={this._toggleTimer}
          {...rest}
        />
      )
    }
  }

  const TimerContainer = (props: any) => {
    return <TimerWrapper {...props} />
  }

  return TimerContainer
}

export default TimerHOC
