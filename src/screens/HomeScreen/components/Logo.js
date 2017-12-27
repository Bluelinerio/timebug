import React from 'react';
import styles from '../styles';
import { Image } from 'react-native';

const logoImage = require('../../../resources/images/NavLogo.png')

export default () => <Image source={logoImage} style={styles.bannerImage} />;
