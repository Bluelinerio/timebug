// @flow
import React          from 'react'
import { View, Text } from 'react-native'
import styles         from '../styles'

type Props = {
  title: string,
  children: React.Node<any>,
}

class ChartContainerComponent extends React.PureComponent<Props> {
  render() {
    const { title } = this.props
    return (
      <View style={styles.entry}>
        <View style={styles.slideInnerContainer}>
          <View style={styles.carouselContainerTitleContainer}>
            <Text style={styles.carouselContainerTitle}>{title}</Text>
          </View>
          {this.props.children}
        </View>
      </View>
    )
  }
}

export default ChartContainerComponent
