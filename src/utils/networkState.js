// @flow
import { NetInfo, Alert, Platform } from 'react-native';
import { NETWORK_ALERT_TIME, WORK_OFFLINE } from '../constants/constants';

/**
 * check network connection
 */
class NetworkState {
  currentState: ?string = null;
  offlineMode: boolean = false;
  isInProgres: boolean = false;

  _alert(resolve, reject, dontWorkOffline: boolean) {
    if (!this.offlineMode) {
      Alert.alert(
        "An internet connection is required to use some of this app's functionality",
        '',
        [
          {
            text: 'Try again',
            onPress: () => {
              setTimeout(() => {
                this._checkConnection(resolve, reject, dontWorkOffline);
              }, NETWORK_ALERT_TIME);
            }
          },
          {
            text: 'OK'
          }
        ]
      );
    } else if (dontWorkOffline) {
      Alert.alert(
        "An internet connection is required to use some of this app's functionality",
        '',
        [
          {
            text: 'Try again',
            onPress: () => {
              setTimeout(() => {
                this._checkConnection(resolve, reject, dontWorkOffline);
              }, NETWORK_ALERT_TIME);
            }
          },
          {
            text: 'OK'
          }
        ]
      );
    }
  }

  _checkConnection(resolve, reject, dontWorkOffline: boolean = false) {
    if (this.isInProgres) {
      resolve();
      return;
    }
    if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then(isConnected => {
        this.isInProgres = false;
        if (isConnected) {
          resolve();
        } else {
          this._alert(resolve, reject, dontWorkOffline);
        }
      });
    } else {
      if (this.currentState === null) {
        /**
         * if check first time wait for response
         */
        NetInfo.addEventListener('change', reach => {
          if (this.currentState === null) {
            if (reach === 'wifi' || reach === 'cell') {
              resolve();
            } else {
              this._alert(resolve, reject, dontWorkOffline);
            }
          }
          if (reach === 'wifi' || reach === 'cell') {
            this.offlineMode = false;
          }
          this.currentState = reach;
          this.isInProgres = false;
        });
      }
      if (this.currentState === 'wifi' || this.currentState === 'cell') {
        resolve();
      }
      if (this.currentState === 'none' || this.currentState === 'unknown') {
        this._alert(resolve, reject, dontWorkOffline);
      }
    }
  }

  haveConnection(dontWorkOffline: boolean = WORK_OFFLINE): Promise<void> {
    this.isInProgres = true;
    const p: Promise<void> = new Promise(({ resolve, reject }) =>
      this._checkConnection(resolve, reject, dontWorkOffline)
    );
    return p;
  }
}

export default new NetworkState();
