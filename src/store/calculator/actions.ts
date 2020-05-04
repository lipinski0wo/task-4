import axios from 'axios'
import { GET_CURRENCIES, GET_RATES } from './types'
import { ADD_LOADING, REMOVE_LOADING, ADD_MSG } from '../general/types'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../index'
import config from '../../config.json'

export const getCurrencies = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch({
      type: ADD_LOADING,
    })

    await dispatch({
      type: GET_CURRENCIES,
      payload: [],
    })

    const { data } = await axios.get(
      `${config.currencyapi_URL}/currencies?key=${config.currencyapi_KEY}`
    )

    const payload = Object.keys(data.currencies).map((key: string) => ({
      value: key,
      label: data.currencies[key],
    }))

    await dispatch({
      type: GET_CURRENCIES,
      payload,
    })
  } catch {
    dispatch({
      type: ADD_MSG,
      payload: {
        type: 'error',
        name: 'problem while loading currencies.',
      },
    })
  } finally {
    dispatch({
      type: REMOVE_LOADING,
    })
  }
}

export const getRates = (
  base: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    dispatch({
      type: ADD_LOADING,
    })
    const { data } = await axios.get(
      `${config.currencyapi_URL}/rates?key=${config.currencyapi_KEY}&base=${base}`
    )

    const payload = Object.keys(data.rates).map((key: string) => ({
      label: key,
      value: data.rates[key],
    }))

    await dispatch({
      type: GET_RATES,
      payload,
    })
  } catch {
    dispatch({
      type: ADD_MSG,
      payload: {
        type: 'error',
        name: 'problem while loading rates.',
      },
    })
  } finally {
    dispatch({
      type: REMOVE_LOADING,
    })
  }
}

export const getBad = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch({
      type: ADD_LOADING,
    })
    await axios.get(`${config.currencyapi_URL}/itisnotthere`)
  } catch {
    dispatch({
      type: ADD_MSG,
      payload: {
        type: 'error',
        name: 'breaking bad',
      },
    })
  } finally {
    dispatch({
      type: REMOVE_LOADING,
    })
  }
}
