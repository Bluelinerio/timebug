import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  categoryList: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-around',
  },
  categoryButton: {
    width: '100%',
    height: 64,
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  categoryButtonText: {
    color: 'black',
  },
})
