// @flow
import * as React from 'react'
import {
  View,
  Text,
} from 'react-native'
import glamorous              from 'glamorous-native'
import styles                 from '../../styles/dashbaord.styles'
import Meditator              from '../../../../components/Meditator';
import YesNoButton            from '../../../../components/YesNoButton'
import HighlighRow            from '../../../../components/HighlighRow'
import { 
  hotPink, 
}                             from '../../../../constants/colors';

const Card = glamorous(/*TouchableBounce*/View)(styles.dashboardCard);
const Row = glamorous.view(styles.suggestionRow);

export default class AppInstructions extends React.PureComponent<{onPress: ()=>void }> {
  render() {
    const { onPress } = this.props;
    return (
      <Card>
        <Row>
          <HighlighRow> 
            <Text style={[styles.suggestionText, styles.strong, { 
              textAlign: 'center', 
              color: hotPink
            }]}>
              {`Not sure where to start?\n`}
            </Text>
            <Meditator />
            <View style={{
              flexDirection:'row',
              justifyContent:'center',
              alignItems: 'center',
            }}>
              <YesNoButton
                title={'Read more'}
                onPress={onPress}
              />
            </View>
          </HighlighRow>
        </Row>
      </Card>
    )
  }
}