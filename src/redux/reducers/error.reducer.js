// @flow
type ErrorState = {
  isError: boolean,
  message: string
}

type ErrorAction = {
  type: string,
  message: ?string
}

const initialState: ErrorState = {
  isError: false,
  message: ''
}

export default function(state: ErrorState = initialState, action: ErrorAction) {
  switch (action.type) {
  case String(action.type.match(/.+FAILED/)):
    return {
      isError: true,
      message: action.message
    }
  default:
    return state
  }
}
