import React from 'react';
import styles from '../styles/index.styles';
import { Image } from 'react-native';

const logoImage = require('../../../../assets/NavLogo.png')
export default () => <Image source={logoImage} style={styles.bannerImage} />;
