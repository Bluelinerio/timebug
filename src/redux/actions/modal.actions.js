//@flow
import { OPEN_MODAL, CLOSE_MODAL } from '../actionTypes'

export type ModalActionPayload = {
  key: string,
  params: any
}

export const openModal = (payload: ModalActionPayload) => ({
  type: OPEN_MODAL,
  payload
})

export const closeModal = (payload: ModalActionPayload) => ({
  type: CLOSE_MODAL,
  payload
})
