export interface ISingleCurrency {
  label: string
  value: string
}

export interface ISingleRate {
  label: string
  value: number
}

export interface ICalculatorState {
  currencies: ISingleCurrency[]
  rates: ISingleRate[]
}

export interface IGetCurrenciesHitAPI extends ISingleCurrency {
  [key: string]: string
}

export const GET_CURRENCIES = 'GET_CURRENCIES'
export const GET_RATES = 'GET_RATES'

interface IGetCurrenciesAction {
  type: typeof GET_CURRENCIES
  payload: ISingleCurrency[]
}

interface IGetRatesAction {
  type: typeof GET_RATES
  payload: ISingleRate[]
}

export type ICalculatorActionTypes = IGetCurrenciesAction | IGetRatesAction
