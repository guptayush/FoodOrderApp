import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import MenuActions from '../Redux/MenuRedux'

export function* getMenuItems(api, action) {
  const { resId } = action
  // make the call to the api
  const response = yield call(api.getMenuItems, resId)

  if (response.ok && response.data && response.data.status == 'success') {

    yield put(MenuActions.getMenuItemsSuccess(response.data.daily_menus))
  } else {
    yield put(MenuActions.getMenuItemsFailed(response.message))
  }
}
