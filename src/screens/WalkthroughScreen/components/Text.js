// @flow
import * as React from 'react';
import { Text as RNText } from 'react-native';
import { Theme } from './Theme';
import type { ThemeProps } from './Theme';
import type { BaseProps } from './Types';

type TypographyProps = BaseProps & {
  theme: ThemeProps,
  type:
    | 'header1'
    | 'header2'
    | 'header3'
    | 'large'
    | 'regular'
    | 'small'
    | 'micro',
  numberOfLines?: number,
  gutterBottom?: boolean,
  children: string,
};

export default class Text extends React.Component<TypographyProps> {
  static defaultProps = {
    type: 'regular',
    theme: Theme,
  };

  render(): React.Node {
    const {
      type,
      style,
      numberOfLines,
      gutterBottom,
      children,
      theme,
    } = this.props;
    const defaultStyle = [
      theme.typography[type],
      { backgroundColor: 'transparent' },
    ];
    const isHeader = type.startsWith('header');
    defaultStyle.push({
      color: isHeader
        ? 'black'
        : type === 'large' ? theme.palette.lightGray : theme.typography.color,
      marginBottom: gutterBottom
        ? isHeader ? theme.spacing.base : theme.spacing.small
        : 0,
    });
    defaultStyle.push(style);
    return (
      <RNText style={defaultStyle} {...{ numberOfLines }}>
        {type === 'large' ? children.toUpperCase() : children}
      </RNText>
    );
  }
}
