// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PaginateCarousel from '../components/PagninatedCarousel';

const mapStateToProps = ({ cms: { colors, steps } }) => ({
	steps, colors
});

export default connect(mapStateToProps)(PaginateCarousel);
