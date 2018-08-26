//@flow
import { CHANGE_UI_STATUS, RESET_UI_STATUS } from '../actionTypes'

export type UIActionPayload = {
  screen: string,
  params: any
}

export const changeUI = (payload: UIActionPayload) => ({
  type: CHANGE_UI_STATUS,
  payload
})

export const resetUI = () => ({
  type: RESET_UI_STATUS
})
