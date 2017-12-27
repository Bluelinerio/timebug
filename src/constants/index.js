import { Platform } from 'react-native';

export const APP_NAME = Platform.select({
	ios: '2020',
	android: 'lifevision'
});

const uriPrefix = Platform.select({
	android: 'lifevision://lifevision/',
	ios: 'lifevision://'
});

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
