import * as React from 'react'
import EmojiPickerScreenComponent from './EmojiPickerScreenComponent'
import { NavigationActions, StackNavigator } from 'react-navigation'
import { mapProps, compose } from 'recompose'
import { connect } from 'react-redux'
import updateStoreWithEmojiAndValue from '../../redux/actions/checkins.actions'
import HeaderCloseButton from '../../components/HeaderCloseButton'

const EmojiPickerScreenContainer = compose(
  connect(null, { updateStoreWithEmojiAndValue }),
  mapProps(props => {
    return {
      ...props,
      ...props.navigation.state.params
    }
  })
)(EmojiPickerScreenComponent)

EmojiPickerScreenContainer.navigationOptions = ({
  navigation: { dispatch, params }
}) => {
  //debugger
  return {
    headerStyle: [
      {
        backgroundColor: 'white'
      }
    ],
    title: 'How are you feeling?',
    headerRight: (
      <HeaderCloseButton
        onPress={() => dispatch(NavigationActions.back())}
        pressColorAndroid={'white'}
        tintColor={'white'}
      />
    )
  }
}

const EmojiPickerScreen = StackNavigator(
  {
    EmojiPicker: {
      screen: EmojiPickerScreenContainer
    }
  },
  {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1
    }
  }
)

import { fixDebounce } from '../../navigation/util'
// TODO: determin if it is required to fixDebounce:
fixDebounce(EmojiPickerScreen)

export default EmojiPickerScreen
