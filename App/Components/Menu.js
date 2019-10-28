import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RefreshControl, View, FlatList } from 'react-native'
import { Colors } from '../Themes';
import MenuItem from './MenuItem';
import { connect } from 'react-redux'
import MenuActions from '../Redux/MenuRedux'
import CartActions from '../Redux/CartRedux'
import Constants from '../Config/Constants';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.getMenuItems()
    }

    getMenuItems = () => {
        this.props.getMenuItems(Constants.RES_ID)
    }

    onAddToCart = (item) => {
        this.props.addToCart(item)
    }

    onRemoveFromCart = (item) => {
        this.props.removeFromCart(item)
    }

    render() {
        const { menuItems, cartItems, fetchingMenu } = this.props
        return (
            <View style={{ flex:1,marginVertical: 10 }}>
                <FlatList
                    ref="flat"
                    refreshControl={
                        <RefreshControl
                            refreshing={fetchingMenu}
                            onRefresh={this.getMenuItems}
                        />
                    }
                    data={menuItems ? menuItems : []}
                    keyExtractor={(item, index) => "" + index}
                    extraData={cartItems}
                    renderItem={({ item }) => (
                        <MenuItem dish={item.dish}
                            onAddToCart={this.onAddToCart}
                            onRemoveFromCart={this.onRemoveFromCart}
                            cart={cartItems[item.dish.dish_id]}
                        />
                    )}
                />

            </View>
        )
    }
}

const mapStateToProps = state => ({
    menuItems: state.menu.menuItems,
    cartItems: state.cart.cartItems,
    fetchingMenu: state.menu.fetchingMenu
})

const mapDispatchToProps = dispatch => ({
    getMenuItems: resId => dispatch(MenuActions.getMenuItemsRequest(resId)),
    addToCart: dish => dispatch(CartActions.addToCartRequest(dish)),
    removeFromCart: dish => dispatch(CartActions.removeFromCartRequest(dish)),

})


export default connect(mapStateToProps, mapDispatchToProps)(Menu)
