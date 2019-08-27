// @flow
import React from 'react'
import { connect } from 'react-redux'
import screen from './Walkthrough'
import selectors from '../../redux/selectors'
import { popToTop } from '../../redux/actions/nav.actions'

const mapStateToProps = state => ({
  slides: selectors.introSlides(state),
})

const dismiss = popToTop

const WalkthroughContainer = connect(mapStateToProps, { dismiss })(screen)

export default class WalkthroughWrapper extends React.PureComponent {
  render() {
    return <WalkthroughContainer />
  }
}
