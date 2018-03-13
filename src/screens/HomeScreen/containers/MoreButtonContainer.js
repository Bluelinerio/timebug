import * as React from 'react'
import { connect } from 'react-redux'
import { compose, branch, renderNothing, mapProps } from 'recompose'
import { withNavigation } from 'react-navigation'
import selectors from '../../../redux/selectors'
import { goToMarkdownScreen } from '../../../redux/actions/nav.actions'
import AppInstructionsCell from '../components/DashboardCells/AppInstructionsCell'
import markdownStyles from '../../../styles/Markdown/stepScreen'
import { headerBackgrounds } from '../../../resources/images'
import { randomItem } from '../../../utils/random'

const mapStateToProps = state => ({
  user: selectors.user(state),
  appInstructions: selectors.appInstructions(state),
  colors: selectors.uniqueColors(state)
})

export default compose(
  connect(mapStateToProps),
  branch(({ appInstructions }) => !appInstructions, renderNothing),
  withNavigation,
  mapProps(({ appInstructions, colors, navigation }) => ({
    onPress: () =>
      navigation.dispatch(
        goToMarkdownScreen({
          ...appInstructions,
          markdownStyles,
          image: randomItem(Object.values(headerBackgrounds)),
          color: randomItem(colors),
          statusBar: 'bright'
        })
      )
  }))
)(AppInstructionsCell)
