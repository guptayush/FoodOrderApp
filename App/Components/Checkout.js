import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Colors } from '../Themes';
import RadioButton from './RadioButton';
import { connect } from 'react-redux'
import CartActions from '../Redux/CartRedux'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from './Styles/CheckoutStyles'

class Checkout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: 0
        }
        this.total = 0;
    }

    onSelectRadioButton = (index) => {
        this.setState({ checked: index })
    }

    onRemoveFromCart = (item) => {
        this.props.removeFromCart(item)
    }

    getPrice = (amount) => {
        return Number(amount.split('Kč')[0])
    }

    getTotal = () => {
        let amount = 0;
        Object.values(this.props.cartItems).map((item) => {
            amount += item.qty * this.getPrice(item.price)
        })
        this.total = amount
    }

    render() {
        const { cartItems } = this.props
        const { checked } = this.state
        this.getTotal()
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: Colors.cloud, padding: 10 }}>
                    {this.total > 0 ? <ScrollView contentContainerStyle={{ backgroundColor: Colors.snow, paddingVertical: 10 }}>
                        {checked == 0 && this.total < 500 ? <View style={styles.textView}>
                            <Text style={[styles.fontsMedium, { fontWeight: '400', alignItems: 'center' }]}>You need to spend {500 - this.total} more for delivery</Text>
                        </View> : null}
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <RadioButton index={0} heading='Delivery' subHeading='30 - 45 mins' checked={checked == 0} onSelect={this.onSelectRadioButton} />
                            <RadioButton index={1} heading='Collection' subHeading='20 mins' checked={checked == 1} onSelect={this.onSelectRadioButton} />
                        </View>
                        <View style={styles.itemsView}>

                            {Object.values(cartItems).map((item) => (
                                <View key={item.dish_id} style={{ flexDirection: 'row', marginVertical: 5 }}>
                                    <TouchableOpacity style={styles.box} onPress={() => this.onRemoveFromCart(item)}>
                                        <MaterialIcons name="remove" size={16} color={Colors.black} />
                                    </TouchableOpacity>
                                    <View style={{ flex: 3, marginLeft: 7 }}>
                                        <Text style={[styles.fontsMediumLight]}>{item.name}</Text>
                                    </View>
                                    <View style={{ flex: 0.5, marginLeft: 7 }}>
                                        <Text style={[styles.fontsMediumLight]}>x {item.qty}</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <Text style={[styles.fontsMediumLight]}>₹ {item.qty * this.getPrice(item.price)}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                        <View style={styles.total}>
                            <Text style={[styles.fontsMediumLight]}>Subtotal</Text>
                            <Text style={[styles.fontsMediumLight]}>₹ {this.total}</Text>
                        </View>
                        <View style={styles.total}>
                            <Text style={[styles.fontsRegularLight]}>Total</Text>
                            <Text style={[styles.fontsRegularLight]}>₹ {this.total}</Text>
                        </View>
                    </ScrollView> :
                        <View style={styles.emptyCart}>
                            <Text style={[styles.fontsMedium, { fontWeight: '400', alignItems: 'center' }]}>Your Cart is empty !</Text>
                        </View>
                    }
                </View>

            </View>
        )
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
})

const mapDispatchToProps = dispatch => ({
    removeFromCart: dish => dispatch(CartActions.removeFromCartRequest(dish)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
