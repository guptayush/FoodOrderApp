import React, { Component } from 'react'
import { View } from 'react-native'
import { Colors } from '../Themes'
import Menu from '../Components/Menu';
import TabBar from '../Components/TabBar';
import Checkout from '../Components/Checkout';

// Styles
import styles from './Styles/LaunchScreenStyles'

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
        <View style={styles.alignTabs}>
          <TabBar heading1='Menu' heading2='Checkout' selected={selected} onChange={this.onChangeSelection} />
        </View>
        <View style={{ flex: 1, borderColor: Colors.black, borderWidth: 2 }}>
          {selected == 0 ?
            <Menu /> : <Checkout />
          }
        </View>
      </View>
    )
  }
}
