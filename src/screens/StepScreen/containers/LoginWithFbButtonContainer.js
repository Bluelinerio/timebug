import * as React from 'react'
import { connect } from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native'
import Button                       from '../../../components/Button';
import type { Props }               from '../../../components/Button'
import { loginWithFbButtonPressed } from '../../../redux/actions'
import { heavyGray, lightGray }      from '../../../constants/colors'

import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const FBButton = ({ onPress, advisoryText=`We don't post anything to faecbook` }) => (
  <View 
    style={styles.container}
  >
      <Icon.Button 
        name="facebook" 
        backgroundColor="#3b5998" 
        onPress={onPress}
        style={styles.facebookButton}
      >
        Login with Facebook
      </Icon.Button>
      <View style={styles.advisoryContainer}
      >
        <Entypo 
          color={heavyGray}
          name='info-with-circle'
          style={styles.infoIcon}
        />
        <Text style={styles.advisoryText}>
          {advisoryText}
        </Text>
      </View>
  </View>
);

export default connect(
  null, 
  ({ onPress: loginWithFbButtonPressed })
)(FBButton)

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent:'center',
    marginVertical: Dimensions.get('window').height * 0.05,
  },
  facebookButton: {
    marginHorizontal:10
  },
  advisoryContainer: {
    marginTop: 10,
    flexDirection:'row',
    justifyContent:'center',
  },
  infoIcon: {
    alignSelf:'center',
    marginHorizontal: 4
  },
  advisoryText: {
    textAlign:'center',
    color: lightGray,
    fontSize:11
  }
})