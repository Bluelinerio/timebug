// @flow
import React         from 'react'
import { Image }     from 'react-native'
import SvgIcon       from '2020_components/SvgIcon'
import { iconStyle } from '../../styles/common'
import styles        from '../../styles/board'

type Props = {
  svg: string,
  imageSource: {
    uri: string,
  },
}

class AdvisorImage extends React.PureComponent<Props> {
  render() {
    const { svg, imageSource } = this.props
    return (
      <React.Fragment>
        {imageSource ? (
          <Image style={styles.advisorIcon} source={imageSource} />
        ) : (
          <SvgIcon name={svg} {...iconStyle} />
        )}
      </React.Fragment>
    )
  }
}

export default AdvisorImage
