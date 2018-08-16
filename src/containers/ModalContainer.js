import React                     from 'react'
import { connect }               from 'react-redux'
import ModalComponent            from '../components/ModalComponent'
import { openModal, closeModal } from '../redux/actions/modal.actions'

type ModalState = {
  openKeys: [string]
}

type ModalDispatch = {
  openModal: (key: string) => any,
  closeModal: (key: string) => any
}

const mapStateToProps = (state: any): ModalState => {
  const { modal: { openKeys } } = state
  return {
    openKeys
  }
}

const mapDispatchToProps = (dispatch: any): ModalDispatch => ({
  openModal: (key: string) => dispatch(openModal({ key })),
  closeModal: (key: string) => dispatch(closeModal({ key }))
})

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(
  ModalComponent
)

export const withModal = Component => {
  const container = () => (
    <React.Fragment>
      <ModalContainer />
      <Component />
    </React.Fragment>
  )
  return container
}
