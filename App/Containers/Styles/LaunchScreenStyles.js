import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.fonts,
  headingBox:{
    flex: 1, 
    alignItems: 'center', 
    borderColor: Colors.black, 
    borderWidth: 2, 
    borderBottomWidth: 0, 
    padding: 10,
  }
})
