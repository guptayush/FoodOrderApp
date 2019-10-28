import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View, FlatList } from 'react-native'
import { Colors } from '../Themes';
import MenuItem from './MenuItem';
import { connect } from 'react-redux'
import MenuActions from '../Redux/MenuRedux'
import CartActions from '../Redux/CartRedux'

const resId = '16507624'

class Menu extends PureComponent {
    constructor(props) {
        super(props)
        this.getMenuItems()
    }

    getMenuItems = () => {
        this.props.getMenuItems(resId)
    }

    onAddToCart = (item) => {
        this.props.addToCart(item)
    }

    render() {
        const { menuItems, cartItems } = this.props
        return (
            <View style={{ marginVertical: 10 }}>
                <FlatList
                    ref="flat"
                    // refreshControl={
                    //     <RefreshControl
                    //         refreshing={threadCommentsFetching && this.state.page == 0}
                    //         onRefresh={this.refreshThread}
                    //         tintColor={Colors.ROYAL_BLUE_1}
                    //         colors={[Colors.ROYAL_BLUE_1]}
                    //     />
                    // }
                    data={menuItems ? menuItems : []}
                    keyExtractor={(item, index) => "" + index}
                    extraData={cartItems}
                    renderItem={({ item }) => (
                        <MenuItem dish={item.dish}
                            onAddToCart={this.onAddToCart}
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
    cartItems: state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
    getMenuItems: resId => dispatch(MenuActions.getMenuItemsRequest(resId)),
    addToCart: dish => dispatch(CartActions.addToCartRequest(dish)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Menu)
