import theme from 'react-native-theme';

const HEADER_MAX_HEIGHT = 263;

theme.add({
  scrollableHeaderFill: {
    flex: 1,
  },
  scrollableHeaderRow: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableHeaderHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  scrollableHeaderBar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    zIndex: 11
  },
  scrollableHeaderTitle: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollableHeaderScrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
  scrollableHeaderBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    zIndex: 10,
  },
  scrollableHeaderBackgroundContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    zIndex: 9
  },
});
