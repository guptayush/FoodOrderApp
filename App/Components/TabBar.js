import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from '../Themes'

export default TabBar = (props) => {
    return (
        <>
            <TouchableOpacity onPress={() => props.onChange(0)} activeOpacity={0.7}
                style={[styles.headingBox, props.selected == 0 ? { padding: 20, backgroundColor: Colors.lightGreen } : { borderRightWidth: 0 }]}>
                <Text style={styles.fontsLarge}>{props.heading1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.onChange(1)} activeOpacity={0.7}
                style={[styles.headingBox, props.selected == 1 ? { padding: 20, backgroundColor: Colors.lightGreen } : { borderLeftWidth: 0 }]}>
                <Text style={styles.fontsLarge}>{props.heading2}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.fonts,
    headingBox: {
        flex: 1,
        alignItems: 'center',
        borderColor: Colors.black,
        borderWidth: 2,
        borderBottomWidth: 0,
        padding: 10,
    }
})