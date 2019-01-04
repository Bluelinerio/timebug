import React           from 'react'
import { View }        from 'react-native'
import styles          from '../../../styles'
import ConnectedSlider from '../Sets/SliderSet'

type Props = {
  value: any,
  onChange: () => any,
  formStyles: any,
  parentField: {
    content?: any,
    options?: any,
  },
}

class ConnectedSliderSet extends React.PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        <View style={[styles.container, styles.listFormContainer]}>
          <View style={styles.listElementContainer}>
            <ConnectedSlider {...this.props} />
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default ConnectedSliderSet
