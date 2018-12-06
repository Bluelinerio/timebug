import { connect } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';

const onPress = () => dispatch =>
  Alert.alert(
    'Sign Out',
    'Are you sure you want to sign out?',
    [
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: () => dispatch({ type: 'LOGOUT' }),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ],
    { cancelable: false }
  );

const LogoutButtonContainer = connect(null, { onPress })(TouchableOpacity);

export default LogoutButtonContainer;
