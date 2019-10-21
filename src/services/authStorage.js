// @flow
import AsyncStorage from '@react-native-community/async-storage'

const TOKEN_KEY = 'lifevision-1'

export type TokenAndUserIdType = {
  token: string,
  userId: string,
  endpoint: string,
  source: 'google' | 'facebook',
}

const emptyTokenAndUserId = {
  token: null,
  userId: null,
  endpoint: null,
  source: null,
}

// TODO: This function isn't used, remove if not needed.
// const wipeOldTokens = () => {
//   // older tokens we want to erase...
//   const OLD_TOKEN_KEY = "@2020-Token";
//   const OLD_USER_ID_KEY = "@2020-UserId";
//   return Promise.all([
//     AsyncStorage.removeItem(OLD_TOKEN_KEY),
//     AsyncStorage.removeItem(OLD_USER_ID_KEY)
//   ]);
// };

async function getTokenAndUserId() {
  const keys = await AsyncStorage.getAllKeys()
  if (keys && keys.includes(TOKEN_KEY)) {
    try {
      const data = await AsyncStorage.getItem(TOKEN_KEY)
      return JSON.parse(data)
    } catch (e) {
      return null
    }
  } else {
    return emptyTokenAndUserId
  }
}

async function setTokenAndUserId(data: TokenAndUserIdType) {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(data))
  } catch (e) {
    console.log(e)
  }
}

async function wipeStorage() {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY)
  } catch (e) {
    console.log(e)
  }
}

export default {
  getTokenAndUserId,
  setTokenAndUserId,
  wipeStorage,
}
