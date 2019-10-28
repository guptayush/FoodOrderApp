import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getMenuItemsRequest: ['resId'],
  getMenuItemsSuccess: ['response'],
  getMenuItemsFailed: [],
})

export const MenuTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingMenu: null,
  menuItems: []
})


/* ------------- Reducers ------------- */

export const getMenuItemsRequest = (state, { }) =>
  state.merge({ fetchingMenu: true })

export const getMenuItemsSuccess = (state, action) => {
  const { response } = action
  return state.merge({
    fetchingMenu: false,
    menuItems: [].concat(...response.map((menu) => (
      menu.daily_menu.dishes
    )))
  })
}

export const getMenuItemsFailed = (state) =>
  state.merge({ fetchingMenu: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MENU_ITEMS_REQUEST]: getMenuItemsRequest,
  [Types.GET_MENU_ITEMS_SUCCESS]: getMenuItemsSuccess,
  [Types.GET_MENU_ITEMS_FAILED]: getMenuItemsFailed
})
