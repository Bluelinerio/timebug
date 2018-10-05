import * as React                            from 'react'
import EmojiPickerScreenComponent            from './EmojiPickerScreenComponent'
import { NavigationActions, StackNavigator } from 'react-navigation'
import { withProps, compose }                from 'recompose'
import HeaderCloseButton                     from '../../components/HeaderCloseButton'
import { submitCheckin }                     from '../../redux/actions/user.actions'

const EmojiPickerScreenContainer = compose(
  withProps(({ navigation: { dispatch, state } }) => {
    return {
      ...state.params,
      updateStoreWithEmojiAndValue: ({ value, emoji }) => dispatch(submitCheckin({
        name:'emoji',
        data: {
          value,
          emoji
        }
      }))
    }
  })
)(EmojiPickerScreenComponent)

EmojiPickerScreenContainer.navigationOptions = ({
  navigation: { dispatch, state: { params: { title, color } } }
}) => ({
  headerStyle: [
    {
      backgroundColor: color,
      elevation: 0
    }
  ],
  title,
  headerRight: (
    <HeaderCloseButton
      onPress={() => dispatch(NavigationActions.back())}
      pressColorAndroid={'white'}
      tintColor={'white'}
    />
  )
})

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
