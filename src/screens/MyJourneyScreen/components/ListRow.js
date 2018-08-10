import React from 'react'
import View from 'react-native'
import ListEntry from './ListEntry'
import styles         from '../styles'

const ListRow = props => {
  const { style } = props
  return (
    <View style={[styles.row, styles.elementRow, style.row]}>
      <ListEntry {...props} />
    </View>
  )
}

export default ListRow