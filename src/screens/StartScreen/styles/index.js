import { StyleSheet, Dimensions } from 'react-native'

const { height: viewportHeight } = Dimensions.get(
  'window'
)

const versionHeight = viewportHeight * 0.08

export const colors = {
  background1: 'white'
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1
  },
  full: {
    height: viewportHeight,
    minHeight: viewportHeight
  },
  buttonContainer: {
    flex: 1,
    padding: 20
  },
  button: {
    backgroundColor: 'pink',
    borderRadius: 6,
    padding: 20,
    marginVertical: 10
  },
  buttonText: {
    color: 'white'
  },
  versionContainer: {
      flex: 1,
      maxHeight: versionHeight,
      height: versionHeight
  }
})
