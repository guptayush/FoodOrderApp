import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import Menu from '../Components/Menu';

export default class LaunchScreen extends Component {

  state = {
    selected: 0
  }

  onChangeSelection = (index) => {
    this.setState({
      selected: index
    })
  }


  render() {
    const { selected } = this.state
    return (
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => this.onChangeSelection(0)} activeOpacity={0.7}
            style={[styles.headingBox, selected == 0 ? { padding: 20, backgroundColor: Colors.lightGreen } : { borderRightWidth: 0 }]}>
            <Text style={styles.fontsLarge}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onChangeSelection(1)} activeOpacity={0.7}
            style={[styles.headingBox, selected == 1 ? { padding: 20, backgroundColor: Colors.lightGreen } : { borderLeftWidth: 0 }]}>
            <Text style={styles.fontsLarge}>Checkout</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, borderColor: Colors.black, borderWidth: 2 }}>
          {selected == 0 ?
            <Menu /> : null
          }
        </View>
      </View>
    )
  }
}
