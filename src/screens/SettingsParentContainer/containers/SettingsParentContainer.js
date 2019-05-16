// @flow
import React                         from 'react'
import { connectContext }            from 'react-connect-context'
import { mapProps, compose }         from 'recompose'
import SettingsParentComponent       from '../components/SettingsParentComponent'
import {
  SectionConsumer,
  SectionProvider,
}                                    from '../context/SelectedSectionContext'
import type { ProvidedContextState } from '../types'

const merge = (props: ProvidedContextState) => {
  const { selected } = props
  return {
    selected,
  }
}

const ConnectedScreen = compose(
  connectContext(SectionConsumer),
  mapProps(merge)
)(SettingsParentComponent)

class SettingsParentContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <SectionProvider>
          <ConnectedScreen />
        </SectionProvider>
      </React.Fragment>
    )
  }
}

export default SettingsParentContainer
