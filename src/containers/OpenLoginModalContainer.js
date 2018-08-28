import React                    from 'react'
import { TouchableOpacity }     from 'react-native'
import { connect }              from 'react-redux'
import { key as loginModalKey } from '../components/LoginModal'
import { openModal }            from '../redux/actions/modal.actions'

type OpenLoginModalProps = {
  openModal: () => any,
  children: React.Node
}

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal({ key: loginModalKey }))
})

const OpenLoginModalComponent = ({
  openModal,
  children
}: OpenLoginModalProps) => {
  return <TouchableOpacity onPress={openModal}>{children}</TouchableOpacity>
}

export default connect(null, mapDispatchToProps)(OpenLoginModalComponent)
