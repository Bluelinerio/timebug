//@flow
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  ActivityIndicator,
  FlatList
} from 'react-native'

type Emoji = {
  key: string,
  emoji: string
}

const charFromUtf16 = utf16 =>
  String.fromCodePoint(...utf16.split('-').map(u => '0x' + u))
export const charFromEmojiObject = obj => charFromUtf16(obj.unified)
const EmojiFontSizeForCellWithHight = height => height - 12

export const EmojiCell = ({
  emoji,
  cellSize,
  ...rest
}: {
  emoji: string,
  columnSize: number,
  ...rest
}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={{
      width: cellSize,
      height: cellSize,
      alignItems: 'center',
      justifyContent: 'center'
    }}
    {...rest}
  >
    <Text style={{ fontSize: EmojiFontSizeForCellWithHight(cellSize) }}>
      {charFromEmojiObject(emoji)}
    </Text>
  </TouchableOpacity>
)

export const EmojiList = ({
  data,
  cellSize,
  columns,
  onPress
}: {
  data: Array<Emoji>,
  cellSize: number,
  columns: number,
  onPress: Emoji => void
}) => (
  <FlatList
    style={styles.flatList}
    contentContainerStyle={{
      paddingBottom: cellSize
    }}
    data={data}
    renderItem={({ item }) => (
      <EmojiCell
        key={item.key}
        emoji={item.emoji}
        onPress={() => onPress(item)}
        cellSize={cellSize}
      />
    )}
    horizontal={false}
    numColumns={columns}
    keyboardShouldPersistTaps={'always'}
    removeClippedSubviews
  />
)

export const Loader = ({ theme }: { theme: string }) => (
  <View style={styles.loader}>
    <ActivityIndicator
      size={'large'}
      color={Platform.OS === 'android' ? theme : '#000000'}
    />
  </View>
)

export const Container = ({ children }: () => React.Node) => (
  <View style={styles.frame}>
    <View style={{ flex: 1 }}>{children}</View>
  </View>
)

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    width: '100%'
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabBar: {
    flexDirection: 'row'
  },
  flatList: {
    flex: 1
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  sectionHeader: {
    margin: 8,
    fontSize: 17,
    width: '100%',
    color: '#8F8F8F'
  }
})
