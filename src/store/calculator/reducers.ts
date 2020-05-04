import {
  GET_CURRENCIES,
  GET_RATES,
  ICalculatorState,
  ICalculatorActionTypes,
} from './types'

const initialState: ICalculatorState = {
  currencies: [],
  rates: [],
}

export function calculator(
  state = initialState,
  action: ICalculatorActionTypes
): ICalculatorState {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      }
    case GET_RATES:
      return {
        ...state,
        rates: action.payload,
      }
    default:
      return state
  }
}
