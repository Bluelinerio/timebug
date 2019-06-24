// @flow
import React                 from 'react'
import { TouchableOpacity }  from 'react-native'
import mapNavigationDispatch from '2020_HOC/NavigationServiceHOC'
import { goToLogin }         from '../redux/actions/nav.actions'

type OpenLoginProps = {
  openLogin: () => any,
  children: React.Node,
}

const mapDispatchToProps = dispatch => ({
  openLogin: () => dispatch(goToLogin()),
})

const OpenLoginContainer = ({ openLogin, children }: OpenLoginProps) => {
  return <TouchableOpacity onPress={openLogin}>{children}</TouchableOpacity>
}

export default mapNavigationDispatch(mapDispatchToProps)(OpenLoginContainer)
