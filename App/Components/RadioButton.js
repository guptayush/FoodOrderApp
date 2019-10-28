import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { Colors, ApplicationStyles } from '../Themes'

export default RadioButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onSelect(props.index)}>
            <View style={styles.buttonView}>
                {props.checked && <View style={styles.checkedView}></View>}
            </View>
            <View >
                <Text style={[styles.fontsMedium]}>{props.heading}</Text>
                <Text style={[styles.fontsMedium]}>{props.subHeading}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.fonts,
    buttonView: {
        borderWidth: 1,
        borderRadius: 50,
        height: 20,
        width: 20,
        borderColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 15,
        paddingHorizontal: 10
    },
    checkedView: {
        borderRadius: 5,
        height: 10,
        width: 10,
        backgroundColor: Colors.facebook
    }
})