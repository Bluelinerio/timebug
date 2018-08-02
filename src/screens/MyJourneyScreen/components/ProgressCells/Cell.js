// @flow
import * as React                     from 'react'
import { View, Dimensions, Platform } from 'react-native'
import styles, {
  scrollViewHorizontalPadding
}                                     from './styles/ProgressCell.style'
import OnLayout                       from '../../../../components/OnLayout'
import HighlighRow                    from '../../../../components/HighlighRow'
import HorizontalScrollView           from '../../../../components/HorizontalScrollView'
import Header                         from './CellHeader'

type CellProps = {
  children?: [React.ComponentType<any>],
  layoutComponent: React.ComponentType<any>,
  title: string,
  titleColor: string,
  style?: {
    highlight: any
  } | any
}

const Cell = ({
  children,
  layoutComponent: Component,
  title,
  titleColor,
  style = { highlight: {} },
  ...rest
}: CellProps) => (
  <View style={styles.container}>
    <Header title={title} titleColor={titleColor} />
    <HorizontalScrollView horizontalPadding={scrollViewHorizontalPadding}>
      {
        <HighlighRow
          style={[
            {
              width:
                Dimensions.get('window').width -
                scrollViewHorizontalPadding -
                20
            },
            Platform.OS === 'ios'
              ? {}
              : {
                  marginHorizontal: scrollViewHorizontalPadding
                },
            style.highlight
          ]}
        >
          <OnLayout
            render={({ width }) =>
              width > 0 ? <Component width={width} {...rest} /> : null
            }
          />
          {children}
        </HighlighRow>
      }
    </HorizontalScrollView>
  </View>
)

export default Cell
