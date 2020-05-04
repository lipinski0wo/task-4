export interface ISingleUser {
  id: string
  webformatURL: string
  fullHDURL: string
  user: string
}

export interface IUsersState {
  users: ISingleUser[]
  loadedPage: number
}

export interface IGetUsersHitAPI extends ISingleUser {
  [key: string]: string
}

export const GET_USERS = 'GET_USERS'

interface IGetUsersAction {
  type: typeof GET_USERS
  payload: ISingleUser[]
}

export type IUsersActionTypes = IGetUsersAction
