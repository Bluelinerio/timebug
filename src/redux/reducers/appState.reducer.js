// https://facebook.github.io/react-native/docs/appstate.html
// active - The app is running in the foreground
// background - The app is running in the background. The user is either in another app or on the home screen
// inactive - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call

// @flow
import { FOREGROUND, BACKGROUND, INACTIVE } from 'redux-enhancer-react-native-appstate';

export const UNDETERMIND = 'UNDETERMIND';

export type AppState = UNDETERMIND | {
  +foreground: number,
  +backgound: number,
  +invactive: number,
  +last: string,
  +agregates: Object
};

export const initialState = 'UNDETERMIND'

export default (state: AppState = initialState, action: { type: FOREGROUND | BACKGROUND | INACTIVE}) => {
  switch(action.type) {
    case FOREGROUND:
      return {
        ...state && {},
        foreground: Date.now(),
        last: FOREGROUND
      }
    case BACKGROUND:
      return {
        ...state && {},
        last: BACKGROUND,
        background: Date.now()
      }
    case INACTIVE:
      return {
        ...state && {},
        last: INACTIVE,
        inactive: Date.now()
      }
    default:
			return state;
  }
}