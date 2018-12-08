import { VERSION } from '../actionTypes'

type ChangeVersionPayload = {
    version: number
}

export const changeVersion = (payload: ChangeVersionPayload) => ({
  type: VERSION,
  payload,
})