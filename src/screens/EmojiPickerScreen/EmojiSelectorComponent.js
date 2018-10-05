//@flow
import React, { Component }         from 'react'
import PropTypes                    from 'prop-types'
import { Dimensions, AsyncStorage } from 'react-native'
import {
  EmojiCell,
  EmojiList,
  Loader,
  Container,
  charFromEmojiObject
}                                   from './EmojiViews'
import emoji                        from 'emoji-datasource'

export const Categories = {
  all: {
    symbol: null,
    name: 'All'
  },
  history: {
    symbol: '🕘',
    name: 'Recently used'
  },
  people: {
    symbol: '😊',
    name: 'Smileys & People'
  },
  nature: {
    symbol: '🦄',
    name: 'Animals & Nature'
  },
  food: {
    symbol: '🍔',
    name: 'Food & Drink'
  },
  activities: {
    symbol: '⚾️',
    name: 'Activities'
  },
  places: {
    symbol: '✈️',
    name: 'Travel & Places'
  },
  objects: {
    symbol: '💡',
    name: 'Objects'
  },
  symbols: {
    symbol: '🔣',
    name: 'Symbols'
  },
  flags: {
    symbol: '🏳️‍🌈',
    name: 'Flags'
  }
}

const emojiByCategory = category => emoji.filter(e => e.category === category)
const sortEmoji = list => list.sort((a, b) => a.sort_order - b.sort_order)
const categoryKeys = Object.keys(Categories)
const screenWidth = Dimensions.get('screen').width
const storage_key = '@emoji-emotion:HISTORY'

export default class EmojiSelectorComponent extends Component {
  state = {
    category: Categories.people,
    isReady: false,
    history: [],
    emojiList: null,
    cellSize: 0
  }

  handleEmojiSelect = emoji => {
    if (this.props.recordHistory) {
      this.addToHistory(emoji)
    }
    this.props.onEmojiSelected &&
      this.props.onEmojiSelected(charFromEmojiObject(emoji))
  }

  addToHistory = emoji => {
    AsyncStorage.getItem(storage_key).then(result => {
      let value = []
      if (result) {
        const json = JSON.parse(result)
        if (json.filter(r => r.unified === emoji.unified).length > 0) {
          value = json
        } else {
          const record = Object.assign({}, emoji, { count: 1 })
          value = [record, ...json]
        }
      }
      AsyncStorage.setItem(storage_key, JSON.stringify(value))
      this.setState({
        history: value
      })
    })
  }

  getHistory = () => {
    AsyncStorage.getItem(storage_key)
      .then(result => JSON.parse(result))
      .then(history => {
        if (history) this.setState({ history })
      })
  }

  //
  //  RENDER METHODS
  //
  data() {
    const { history, emojiList, category } = this.state

    if (category === Categories.all) {
      //TODO: OPTIMIZE THIS
      let largeList = []
      categoryKeys.forEach(c => {
        const name = Categories[c].name
        const list =
          name === Categories.history.name ? history : emojiList[name]
        if (c !== 'all' && c !== 'history') largeList = largeList.concat(list)
      })

      return largeList.map(emoji => ({ key: emoji.unified, emoji }))
    } else {
      let list
      const name = category.name
      if (name === Categories.history.name) {
        list = history
      } else {
        list = emojiList[name]
      }
      return list.map(emoji => ({ key: emoji.unified, emoji }))
    }
  }

  cellSize = () => Math.floor(screenWidth / this.props.columns)

  emojiList = () =>
    categoryKeys.map(c => Categories[c].name).reduce(
      (sum, name) => ({
        ...sum,
        [name]: sortEmoji(emojiByCategory(name))
      }),
      {}
    )

  //
  //  LIFECYCLE METHODS
  //
  componentDidMount() {
    const { category } = this.props
    this.setState({ category })

    if (this.props.recordHistory) this.getHistory()
    this.setState({
      emojiList: this.emojiList(),
      cellSize: this.cellSize(),
      isReady: true
    })
  }

  renderItem = ({ item }) => (
    <EmojiCell
      key={item.key}
      emoji={item.emoji}
      onPress={() => this.handleEmojiSelect(item.emoji)}
      cellSize={this.state.cellSize}
    />
  )

  render() {
    return (
      <Container>
        {this.state.isReady ? (
          <EmojiList
            data={this.data()}
            onPress={item => this.handleEmojiSelect(item.emoji)}
            cellSize={this.state.cellSize}
            columns={this.props.columns}
          />
        ) : (
          <Loader theme={this.props.theme} />
        )}
      </Container>
    )
  }
}

EmojiSelectorComponent.propTypes = {
  /** Function called when a user selects an Emoji */
  onEmojiSelected: PropTypes.func.isRequired,

  /** Theme color used for loaders and active tab indicator */
  theme: PropTypes.oneOfType([
    PropTypes.string, // legacy
    PropTypes.object
  ]),
  /** Toggle the history section on or off */
  recordHistory: PropTypes.bool,

  /** Set the default category. Use the `Categories` class */
  category: PropTypes.object,

  /** Number of columns accross */
  columns: PropTypes.number
}

EmojiSelectorComponent.defaultProps = {
  theme: '#007AFF',
  category: Categories.all,
  recordHistory: true,
  columns: 8
}