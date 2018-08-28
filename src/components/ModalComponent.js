import React                                from 'react'
import LoginModal, { key as loginModalKey } from './LoginModal'
import AudioModal, { key as audioModalKey } from './AudioModal'

export type ModalComponentProps = {
  openKeys: string,
  openModal: string => any,
  closeModal: string => any,
  params: any
}

const ModalComponent = ({
  openKeys,
  openModal,
  closeModal,
  params
}: ModalComponentProps) => {
  return (
    <React.Fragment>
      <LoginModal
        isOpen={!!openKeys.find(key => key === loginModalKey)}
        close={() => closeModal(loginModalKey)}
        open={key => openModal(key)}
        {...params && params[loginModalKey] ? params[loginModalKey] : {}}
      />
      <AudioModal 
        isOpen={!!openKeys.find(key => key === audioModalKey)}
        close={() => closeModal(audioModalKey)}
        open={key => openModal(key)}
        {...params && params[audioModalKey] ? params[audioModalKey] : {}}
      />
    </React.Fragment>
  )
}

export default ModalComponent
