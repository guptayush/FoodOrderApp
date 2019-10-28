import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.fonts,
    container: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20
    },
    textView: {
        margin: 10,
        padding: 10,
        backgroundColor: Colors.yellow
    },
    itemsView: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: Colors.cloud,
        padding: 10
    },
    box: {
        backgroundColor: Colors.cloud,
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    total: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    emptyCart:{
        alignItems: 'center',
        justifyContent: 'center',
    }
})
