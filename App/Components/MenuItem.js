import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { Colors } from '../Themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from './Styles/MenuItemStyles'


class MenuItem extends PureComponent {

  static propTypes = {
    dish: PropTypes.object,
    cart: PropTypes.object,
    onAddToCart: PropTypes.func,
    onRemoveFromCart: PropTypes.func
  }

  getPrice = (amount) => {
    return Number(amount.split('Kč')[0])
  }

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
            {cart && cart.qty > 0 ?
              <View style={styles.addCartButton} >
                <TouchableOpacity onPress={() => this.props.onRemoveFromCart(dish)}>
                  <MaterialIcons name="remove" size={16} color={Colors.error} />
                </TouchableOpacity>
                <Text style={styles.fontsSmall}>{cart.qty}</Text>
                <TouchableOpacity onPress={() => this.props.onAddToCart(dish)}>
                  <MaterialIcons name="add" size={16} color={Colors.error} />
                </TouchableOpacity>
              </View>
              :
              <TouchableOpacity style={styles.addCartButton} onPress={() => this.props.onAddToCart(dish)}>
                <Text style={styles.fontsSmall}>ADD</Text>
                <MaterialIcons name="add" size={16} color={Colors.error} />
              </TouchableOpacity>}
          </View>
        </View>
        <View style={{ marginLeft: 20, marginTop: 5 }}>
          <Text style={[styles.fontsMedium, { fontWeight: '500' }]}>₹ {this.getPrice(dish.price)}</Text>
          <Text style={styles.fontsMediumLight}>{dish.description}</Text>
        </View>
      </View>
    )
  }
}

export default MenuItem
