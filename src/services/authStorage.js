// @flow
import { AsyncStorage } from 'react-native'

// older tokens we want to erase...
const OLD_TOKEN_KEY = '@2020-Token'
const OLD_USER_ID_KEY = '@2020-UserId'
//
const TOKEN_KEY = 'lifevision-1';

export type TokenAndUserIdType = { 
	token: string, 
	userId: string, 
	endpoint:string 
}
	
const emptyTokenAndUserId = {
	token: null, 
	userId: null, 
	endpoint:null 
}

const wipeOldTokens = Promise.all([
	AsyncStorage.removeItem(OLD_TOKEN_KEY),
	AsyncStorage.removeItem(OLD_USER_ID_KEY)
]);

// todo: this isn't working needs fixing:
export default {
	getTokenAndUserId: (): ?TokenAndUserIdType => wipeOldTokens
		.then(AsyncStorage.getItem(TOKEN_KEY))
		.then(stringifed => stringifed && JSON.parse(stringifed) || emptyTokenAndUserId )
		.catch(error => emptyTokenAndUserId),
	setTokenAndUserId: (tokenAndUserId: TokenAndUserIdType) => wipeOldTokens
		.then(AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(tokenAndUserId))),
	wipeStorage: () => Promise.all([
		AsyncStorage.removeItem(TOKEN_KEY),
	])
}
