import { Platform } from 'react-native';

export const APP_NAME = Platform.select({
	ios: 'Lifevision',
	android: 'lifevision'
});

export const uriPrefix = Platform.select({
	android: 'lifevisionapp://lifevisionapp/',
	ios: 'lifevisionapp://'
});

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
