import React                                from 'react'
import LoginModal, { key as loginModalKey } from './LoginModal'

export type ModalComponentProps = {
  openKeys: string,
  openModal: string => any,
  closeModal: string => any
}

const ModalComponent = ({
  openKeys,
  openModal,
  closeModal
}: ModalComponentProps) => {
  return (
    <React.Fragment>
      <LoginModal
        isOpen={!!openKeys.find(key => key === loginModalKey)}
        close={() => closeModal(loginModalKey)}
        open={key => openModal(key)}
      />
    </React.Fragment>
  )
}

export default ModalComponent
