// @flow
import * as React from 'react'
import {
  Image,
  View,
  Text
} from 'react-native'
import TouchableBounce 			from 'react-native/Libraries/Components/Touchable/TouchableBounce'
import glamorous              from 'glamorous-native'
import LinearGradient         from 'react-native-linear-gradient';

import styles                 from '../../styles/dashbaord.styles'
import TouchableRoundedImage  from '../../../../components/TouchableRoundedImage';

const Card = glamorous(TouchableBounce)(styles.dashboardCard);
const Row = glamorous.view(styles.suggestionRow);
const BottomRow = glamorous.view(styles.suggestionRowBottom);

const GradientWithTwoColors = ({startColor='white', endColor ='#f8f8f8', children, style }) => (
  <LinearGradient
    style={style || {		
      flex: 2,
      borderRadius: 6,
    }}
    colors={[startColor, endColor]}
    start={{ x: 1, y: 0 }}
		end={{ x: 0, y: 1 }}
  >
  {children}
  </LinearGradient>
);

const HighlighText = ({children}) => (
  <GradientWithTwoColors style={styles.bigSuggestionWithText}>
    <View>
      {children}
    </View>
  </GradientWithTwoColors>
)

const meditators = [
  `🧘‍♂️`,
  `🧘🏻‍♂️`,
  `🧘🏼‍♂️`,
  `🧘🏽‍♂️`,
  `🧘🏾‍♂️`,
  `🧘🏿‍♂️`,
  `🧘‍♀️`,
  `🧘🏻‍♀️`,
  `🧘🏼‍♀️`,
  `🧘🏽‍♀️`,
  `🧘🏾‍♀️`,
  `🧘🏿‍♀️`
];

const meditator = meditators[Math.floor(Math.random() * meditators.length)]

export default class Meditation extends React.PureComponent<{},{ meditator:string }> {
  state = {
    meditator
  }

  render() {
    return (
      <Card>
        <Row>
          <HighlighText> 
            <Text style={styles.emogi}>
              {`${this.state.meditator}`}
            </Text>
            <Text style={[styles.suggestionText, styles.strong, { 
              textAlign: 'center', 
              color: '#FF24D8' 
            }]}>
              {`\nDid you meditate today?\n`}
            </Text>
          </HighlighText>
        </Row>
      </Card>
    )
  }
}