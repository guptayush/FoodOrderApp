import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent,
      padding: Metrics.doubleBaseMargin
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
  },
  fonts: {
    fontsLarge: {
      ...Fonts.style.h5,
      color: Colors.black,
      fontWeight: '400'
    },
    fontsRegular: {
      ...Fonts.style.normal,
      color: Colors.blackText,
    },
    fontsRegularLight: {
      ...Fonts.style.normal,
      color: Colors.grey,
    },
    fontsMedium: {
      ...Fonts.style.description,
      color: Colors.blackText,
    },
    fontsMediumLight: {
      ...Fonts.style.description,
      color: Colors.grey,
    },
    fontsSmall: {
      ...Fonts.style.small,
      color: Colors.blackText,
    },
  }

}

export default ApplicationStyles
