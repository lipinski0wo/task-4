import { GET_USERS, IUsersState, IUsersActionTypes } from './types'

const initialState: IUsersState = {
  users: [],
  loadedPage: 0,
}

export function users(
  state = initialState,
  action: IUsersActionTypes
): IUsersState {
  switch (action.type) {
    case GET_USERS:
      return {
        users: [...state.users, ...action.payload],
        loadedPage: state.loadedPage + 1,
      }
    default:
      return state
  }
}
