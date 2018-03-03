// @flow
import * as React from 'react';
import {
  View,
  Platform,
  WebView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

type Icon = {
  uri: string
};

type Props = {
  style: {},
  source: Icon,
  showWebviewLoader: boolean
};
export default class SVGImage extends React.Component<Props> {
  static defaultProps = {
    style: {},
    source: { uri: '' },
    showWebviewLoader: Platform.OS === 'android'
  };

  renderLoader = () => (
    <View
      style={[
        this.props.style,
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }
      ]}
    >
      <ActivityIndicator />
    </View>
  );

  render() {
    const {
      showWebviewLoader,
      source: { uri },
      style,
      ...restOfProps
    } = this.props;
    const html = `
      <!DOCTYPE html>\n
      <html>
        <head>
          <style type="text/css">
            img {
              width: 100%;
              height: 100%;
            }
            div {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
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
        scalesPageToFit={true}
        style={style}
        {...restOfProps}
        source={{ html }}
      />
    );
  }
}
