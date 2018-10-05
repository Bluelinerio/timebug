import React                                       from 'react'
import { StyleSheet, Text, View, LayoutAnimation } from 'react-native'
import { SafeAreaView, NavigationActions }         from 'react-navigation'
import type { NavigationProp }                     from 'react-navigation'
import EmojiSelectorComponent, { Categories }      from './EmojiSelectorComponent'
import Slider                                      from '../../components/Slider'
import Button                                      from '../../components/Button'

type Props = {
  title: string,
  color: string,
  value: number,
  maximumValue: number,
  minimumValue: number,
  updateStoreWithEmojiAndValue?: ({
    value: number,
    emoji: string
  }) => void,
  navigation: NavigationProp<any>
}

type State = {
  emoji: string,
  value: number,
  selectionMade: boolean
}
class EmojiPickerScreenComponent extends React.Component<Props, State> {
  static defaultProps = {
    color: '#007AFF',
    value: 0.5,
    maximumValue: 1.0,
    minimumValue: 0.0
  }

  state = {
    emoji: '😀',
    value: 0.5,
    selectionMade: false
  }

  triggerLayoutAniamtion = () =>
    LayoutAnimation.configureNext({
      duration: 400,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7
      }
    })

  updateEmoji = emoji => {
    const update = emoji !== this.state.emoji
    if (update) {
      const triggerLayoutAniamtion = this.state.selectionMade === false
      this.setState({ emoji, selectionMade: true }, () => {
        if (triggerLayoutAniamtion) this.triggerLayoutAniamtion()
      })
    }
  }

  doneButton = () => {
    const { value, emoji } = this.state
    this.props.navigation.dispatch(NavigationActions.back())
    this.props.updateStoreWithEmojiAndValue &&
      this.props.updateStoreWithEmojiAndValue({
        value,
        emoji
      })
  }

  updateValue = value => this.setState({ value, selectionMade: true })

  render() {
    const { emoji, selectionMade } = this.state
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'always' }}
        style={[
          styles.container,
          {
            backgroundColor: '#fff'
          }
        ]}
      >
        <View
          style={[
            styles.display,
            {
              borderColor: this.props.color
            }
          ]}
        >
          <Text
            style={[
              styles.emoji,
              {
                opacity: selectionMade ? 1 : 0.4
              }
            ]}
          >
            {emoji}
          </Text>
        </View>
        <EmojiSelectorComponent
          columns={10}
          onEmojiSelected={this.updateEmoji}
          showSearchBar={false}
          showTabs={false}
          showHistory={false}
          showSectionTitles={false}
          category={Categories.people}
        />
        {selectionMade && (
          <View
            style={{
              marginVertical: 20
            }}
          >
            <Button
              onPress={this.doneButton}
              text={"That's it"}
              backgroundColor={this.props.color}
            />
            <Slider
              value={this.props.value}
              maximumValue={this.props.maximumValue}
              minimumValue={this.props.minimumValue}
              onSlidingComplete={this.updateValue}
              color={this.props.color}
            />
          </View>
        )}
      </SafeAreaView>
    )
  }
}

export default EmojiPickerScreenComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  display: {
    padding: 20,
    margin: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emoji: { fontSize: 64, backgroundColor: 'transparent' }
})
