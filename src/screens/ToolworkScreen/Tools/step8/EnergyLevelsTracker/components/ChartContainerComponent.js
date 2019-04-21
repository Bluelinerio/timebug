// @flow
import React                                              from 'react'
import { View, Text, findNodeHandle, InteractionManager } from 'react-native'
import { BlurView }                                       from '@react-native-community/blur'
import type { DataSet }                                   from '../types'
import styles                                             from '../styles'

type Props = {
  title: string,
  children: React.Node<any>,
  physicalData: DataSet,
  emotionalData: DataSet,
  spiritualData: DataSet,
}

type State = {
  viewRef: any,
}

class ChartContainerComponent extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    this.state = { viewRef: null }
  }

  componentDidMount = () => {
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        const viewRef = findNodeHandle(this._viewRef)
        this.setState({ viewRef })
      }, 250)
    })
  }

  render() {
    const { title, physicalData, emotionalData, spiritualData } = this.props
    const disableChart =
      physicalData.length < 2 ||
      spiritualData.length < 2 ||
      emotionalData.length < 2
    return (
      <View style={[styles.entry]}>
        <View
          style={styles.slideInnerContainer}
          ref={r => {
            this._viewRef = r
          }}
        >
          <View style={styles.carouselContainerTitleContainer}>
            <Text style={styles.carouselContainerTitle}>{title}</Text>
          </View>
          {this.props.children}
        </View>
        {disableChart &&
          this.state.viewRef !== null && (
            <BlurView
              viewRef={this.state.viewRef}
              blurAmount={1}
              blurType="xlight"
              style={styles.hidden}
            />
          )}
        {disableChart &&
          this.state.viewRef !== null && (
            <View
              style={[
                styles.hidden,
                {
                  backgroundColor: 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            >
              <Text style={styles.hiddenText}>
                We need more data to display this graph
              </Text>
            </View>
          )}
      </View>
    )
  }
}

export default ChartContainerComponent
