import React from 'react';
import invariant from 'invariant';

/**
 * Pads a given string or number with zeros.
 *
 * @param {any} value Value to zero-pad.
 * @param {number} [length=2] Amount of characters to pad.
 * @returns Left-padded number/string.
 */
export const zeroPad = (value, length = 2) => {
  if (length === 0) return value;
  const strValue = String(value);
  return strValue.length >= length
    ? strValue
    : ('0'.repeat(length) + strValue).slice(length * -1);
};

type RenderProps = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
};

type MeditationTimerProps = {
  lengthInSeconds: number,
  daysInHours: boolean,
  zeroPadLength: number,
  intervalDelay: number,
  precision: number,
  children:
    | React.Node
    | [React.Node]
    | (RenderProps => React.Node | [React.Node]),
  onTick: number => void,
  onTimeElapsed: number => void,
};

export const STOPPED = 'stopped';
export const STARTED = 'started';
export const PAUSED = 'paused';

type State = {
  status: STOPPED | STARTED | PAUSED,
  elapseTime: number,
  timeElapsed: boolean,
};

export default class Countdown extends React.Component<
  MeditationTimerProps,
  State
> {
  static defaultProps = {
    daysInHours: false,
    zeroPadLength: 2,
    intervalDelay: 1000,
    precision: 0,
    children: null,
  };
  state = {
    status: STOPPED,
    elapseTime: 0,
    timeElapsed: false,
  };

  clearInterval() {
    clearInterval(this.interval);
    delete this.interval;
  }

  start = () => {
    if (!this.state.status !== STARTED) {
      this.setState(
        {
          status: STARTED,
        },
        () => {
          this.interval = setInterval(this.tick, this.props.intervalDelay);
        }
      );
    }
  };

  pause = () => {
    if (this.state.status === STARTED) {
      this.setState(
        {
          status: PAUSED,
        },
        () => {
          this.clearInterval();
        }
      );
    }
  };

  stop = () => {
    if (this.state.status === STARTED || this.state.status === PAUSED) {
      this.setState(
        {
          status: STOPPED,
          elapseTime: 0,
        },
        () => {
          this.clearInterval();
        }
      );
    }
  };

  tick = () => {
    const elapseTime = this.state.elapseTime + this.props.intervalDelay;
    const timeElapsed = elapseTime / 1000 >= this.props.lengthInSeconds;
    const timeJustElapsed = !this.state.timeElapsed && timeElapsed;
    console.log(timeJustElapsed ? 'firstTime' : '');
    this.setState(
      {
        elapseTime,
        timeElapsed,
      },
      timeJustElapsed ? this.props.onTimeElapsed : this.props.onTick
    );
  };

  getTimeDifference = () => {
    const { elapseTime: total } = this.state;

    const seconds = total / 1000;

    return {
      total,
      days: Math.floor(seconds / (3600 * 24)),
      hours: Math.floor((seconds / 3600) % 24),
      minutes: Math.floor((seconds / 60) % 60),
      seconds: Math.floor(seconds % 60),
      milliseconds: Number(((seconds % 1) * 1000).toFixed()),
    };
  };

  getFormattedDelta() {
    const { minutes, seconds, days, hours } = this.getTimeDifference();
    const { daysInHours, zeroPadLength } = this.props;

    return {
      days: daysInHours ? null : hours,
      hours: daysInHours
        ? zeroPad(hours + days * 24, zeroPadLength)
        : zeroPad(hours, Math.min(2, zeroPadLength)),
      minutes: zeroPad(minutes, Math.min(2, zeroPadLength)),
      seconds: zeroPad(seconds, Math.min(2, zeroPadLength)),
    };
  }

  render() {
    invariant(this.props.lengthInSeconds, 'lengthInSeconds is not defined');
    console.log(this.state);
    const formattedDelta = this.getFormattedDelta();

    if (typeof this.props.children === 'function') {
      return this.props.children({
        ...this.props,
        ...this.state,
        ...formattedDelta,
      });
    }
    return null;
  }
}
