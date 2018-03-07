// @flow
import * as React from 'react'
import {
  Image,
  View,
  Text,
  Button,
  Platform
} from 'react-native'
import TouchableBounce 			  from 'react-native/Libraries/Components/Touchable/TouchableBounce'
import glamorous              from 'glamorous-native'
import LinearGradient         from 'react-native-linear-gradient';

import styles                 from '../../styles/dashbaord.styles'
import Meditator              from '../../../../components/Meditator';
import YesNoButton            from '../../../../components/YesNoButton'
import HighlighRow            from '../../../../components/HighlighRow'
import { 
  hotPink, 
}                             from '../../../../constants/colors';

const Card = glamorous(TouchableBounce)(styles.dashboardCard);
const Row = glamorous.view(styles.suggestionRow);


export default class MeditationCell extends React.PureComponent<> {
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
              {`\Not sure where to start?\n`}
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