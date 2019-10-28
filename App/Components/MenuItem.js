import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import styles from './Styles/MenuItemStyles'
import { Colors } from '../Themes';
import { TouchableOpacity } from 'react-native-gesture-handler';



class MenuItem extends PureComponent {
  // static propTypes = {
  //   text: PropTypes.string,
  //   onPress: PropTypes.func
  // }

  render() {
    const { dish, cart } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.box}>
            <View style={{ backgroundColor: Colors.error, height: 6, width: 6, borderRadius: 3 }}></View>
          </View>
          <View style={{ flex: 3, marginLeft: 7 }}>
            <Text style={[styles.fontsRegular, { fontWeight: '500' }]}>{dish.name}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity style={styles.addCartButton} onPress={() => this.props.onAddToCart(dish)}>
              <Text style={styles.fontsSmall}>{cart && cart.qty > 0 ? cart.qty : 'ADD'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={[styles.fontsMedium, { fontWeight: '500' }]}>₹ {dish.price}</Text>
          <Text style={[styles.fontsMediumLight]}>{dish.description}</Text>
        </View>
      </View>
    )
  }
}

export default MenuItem
