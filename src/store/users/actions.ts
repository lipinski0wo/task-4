import axios from 'axios'
import { GET_USERS, IGetUsersHitAPI, ISingleUser } from './types'
import { ADD_LOADING, REMOVE_LOADING, ADD_MSG } from '../general/types'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../index'
import config from '../../config.json'

export const getUsers = (
  pageNumber: number
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    dispatch({
      type: ADD_LOADING,
    })
    const { data } = await axios.get(
      `${config.pixabay_URL}/?key=${config.pixabay_KEY}&page=${pageNumber}`
    )

    const payload: ISingleUser[] = data.hits.map((hit: IGetUsersHitAPI) => {
      return {
        id: hit.id + Math.random(),
        user: hit.user,
        webformatURL: hit.webformatURL,
        fullHDURL: hit.fullHDURL || '',
      }
    })

    await dispatch({
      type: GET_USERS,
      payload,
    })
  } catch {
    dispatch({
      type: ADD_MSG,
      payload: {
        type: 'error',
        name: 'problem while loading users.',
      },
    })
  } finally {
    dispatch({
      type: REMOVE_LOADING,
    })
  }
}
