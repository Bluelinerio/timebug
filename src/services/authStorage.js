// @flow
import { AsyncStorage } from 'react-native'

const TOKEN_KEY = '@2020-Token'
const FBTOKEN_KEY = '@2020-FBToken'
const USER_ID_KEY = '@2020-UserId'

const getUserId = () => AsyncStorage.getItem(USER_ID_KEY)
const getToken = () => AsyncStorage.getItem(TOKEN_KEY)
const getTokenAndUserId = (): ({ token?: string, userId?: string }) =>
	Promise.all([getToken(), getUserId()]).then(results => ({ token: results[0], userId: results[1] }))

const setToken = (token: string) => AsyncStorage.setItem(TOKEN_KEY, token)
const setUserId = (userId: string) => AsyncStorage.setItem(USER_ID_KEY, userId)
const setTokenAndUserId = (token: string, userId: string) => Promise.all([setToken(token), setUserId(userId)])
const setFBToken = (token: string) => AsyncStorage.setItem(FBTOKEN_KEY, token)

// .then(AsyncStorage.getItem(TOKEN_KEY)).then(value => {
// 			return;
// 		})

const wipeStorage = () => {
	debugger;
	return Promise.all([
		AsyncStorage.removeItem(TOKEN_KEY),
		AsyncStorage.removeItem(USER_ID_KEY),
		AsyncStorage.removeItem(FBTOKEN_KEY)
	])
}
export default {
	getUserId,
	getToken,
	getTokenAndUserId,

	setToken,
	setUserId,
	setTokenAndUserId,
	setFBToken,
	wipeStorage
}
