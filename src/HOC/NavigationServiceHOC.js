import React from 'react'
import NavigationService from '2020_services/navigation'

type DispatchFn = (dispatch: Function) => any

const mapDispatchToProps = (fn: DispatchFn) => (Component: React.ReactNode) => {
  const dispatchProps = fn(NavigationService.dispatch)
  const NavigationServiceContainer = (props: any) => (
    <Component {...dispatchProps} {...props} />
  )
  return NavigationServiceContainer
}

export default mapDispatchToProps