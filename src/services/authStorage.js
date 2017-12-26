// @flow
import { AsyncStorage } from 'react-native'

const TOKEN_KEY = '@2020-Token'
const USER_ID_KEY = '@2020-UserId'

const getUserId = () => AsyncStorage.getItem(USER_ID_KEY)
const getToken = () => AsyncStorage.getItem(TOKEN_KEY)
const getTokenAndUserId = (): ({ token?: string, userId?: string }) =>
	Promise.all([getToken(), getUserId()]).then(results => ({ token: results[0], userId: results[1] })).catch(err => {
		console.warn(JSON.stringify(err))
	})

const setToken = (token: string) => AsyncStorage.setItem(TOKEN_KEY, token)
const setUserId = (userId: string) => AsyncStorage.setItem(USER_ID_KEY, userId)
const setTokenAndUserId = (token: string, userId: string) => Promise.all([setToken(token), setUserId(userId)]).catch(err => {
	console.warn(JSON.stringify(err))
})

// const FBTOKEN_KEY = '@2020-FBToken'
// const setFBToken = (token: string) => AsyncStorage.setItem(FBTOKEN_KEY, token)
// AsyncStorage.removeItem(FBTOKEN_KEY)

const wipeStorage = () => Promise.all([
		AsyncStorage.removeItem(TOKEN_KEY),
		AsyncStorage.removeItem(USER_ID_KEY),
		
	])
	
export default {
	getUserId,
	getToken,
	getTokenAndUserId,

	setToken,
	setUserId,
	setTokenAndUserId,
//	setFBToken,
	wipeStorage
}
