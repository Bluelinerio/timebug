import React from 'react'
import styles from './styles/CellHeader.style'
import { View, Text, TouchableOpacity, Image } from 'react-native'

type HeaderProps = {
  date: string,
  source: string,
  title: string,
  titleColor: string,
  style? : any
}

const Header = ({ date, source, title, titleColor, style }: HeaderProps) => (
    <View style={styles.header}>
      <View>
        {date && <Text style={styles.date}>{date}</Text>}
        <Text style={[styles.title, styles.strong, styles.cellHeader, { color: titleColor, ...style }, ]}>
          {title}
        </Text>
      </View>
      <TouchableOpacity>
        {source && <Image style={styles.avatar} source={source} />}
      </TouchableOpacity>
    </View>
)

export default Header