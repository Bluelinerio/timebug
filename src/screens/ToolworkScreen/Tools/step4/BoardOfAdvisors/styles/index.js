import { StyleSheet }        from 'react-native'
import { gray900, darkBlue } from '2020_constants/colors'

export const iconColor = darkBlue

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  advisorSyncHeader: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 50,
    minHeight: 50,
  },
  listArea: {
    flex: 6,
  },
  bordered: {
    borderColor: gray900,
    borderTopWidth: 1,
  },
  buttonHeaderArea: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
})
