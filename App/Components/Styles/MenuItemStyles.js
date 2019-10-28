import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.fonts,
  container: {
    padding: 15,
    marginHorizontal: 20,
    backgroundColor: Colors.lightYellow,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  addCartButton: {
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.grey,
    paddingVertical: 3,
    paddingHorizontal: 10
  },
  box: {
    borderWidth: 1,
    borderColor: Colors.error,
    borderRadius: 2,
    height: 12,
    width: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4
  }
})
