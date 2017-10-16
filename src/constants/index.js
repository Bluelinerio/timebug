import { Platform } from 'react-native';

export const APP_NAME = Platform.select({
	ios: '2020',
	android: 'lifevision'
});
