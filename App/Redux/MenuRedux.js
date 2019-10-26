import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: ['username'],
  userSuccess: ['avatar'],
  userFailure: null
})

export const MenuTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  username: null
})


/* ------------- Reducers ------------- */

export const request = (state, { username }) =>
  state.merge({ fetching: true, username, avatar: null })

export const success = (state, action) => {
  const { avatar } = action
  return state.merge({ fetching: false, error: null, avatar })
}

export const failure = (state) =>
  state.merge({ fetching: false, error: true, avatar: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure
})
