//@flow
import React    from 'react'
import { View } from 'react-native'
import styles   from '../styles/EntryStyles'
import Header   from './EntryHeader'

type CarouselEntryProps = {
  width: number,
  title: string,
  children: [React.ComponentType<any>]
}

const CarouselEntry = ({ width, title, children }: CarouselEntryProps) => {
  return (
    <React.Fragment>
      <Header title={title} titleColor="black" />
      <View style={[styles.entry, { width }]}>{children}</View>
    </React.Fragment>
  )
}

export default CarouselEntry
