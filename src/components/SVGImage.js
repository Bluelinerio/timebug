import React, { Component }                                       from 'react';
import { View, Platform, WebView, ActivityIndicator, StyleSheet } from 'react-native';

export default class SVGImage extends Component {
  static defaultProps = {
    style: {},
    source: { uri: '' },
    showWebviewLoader: Platform.OS === 'android',
    height: null,
  };

  renderLoader = () => (
    <View style={[ this.props.style, {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    } ]}>
      <ActivityIndicator/>
    </View>
  );

  render() {
    const { showWebviewLoader, source: { uri }, style, ...restOfProps } = this.props;
    const { height, width }                                             = StyleSheet.flatten(style || []);

    const html = `
      <!DOCTYPE html>\n
      <html>
        <head>
          <style type="text/css">
            img {
              width: 100vw;
              height: (${height}/${width} * 100)vw;
              max-height: 100vh;
              max-width: (${width}/${height} * 100)vh;
            }
            div {
              width: ${width ? width + 'vw' : 'auto'};
              height: ${height ? height + 'vh' : 'auto'};
            }
            body {
              margin: 0;
            }
          </style>
        </head>
        <body>
          <div>
            <img src="${uri}" align="middle" />
          </div>
        </body>
      </html>
    `;

    return (
      <WebView
        startInLoadingState={showWebviewLoader}
        renderLoading={showWebviewLoader ? this.renderLoader : null}
        scalesPageToFit={false}
        style={style}
        {...restOfProps}
        source={{ html }}
      />
    );
  }
}
