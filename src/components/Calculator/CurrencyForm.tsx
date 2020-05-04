import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import Input from './Input'
import Select from './Select'
import validate from '../../helpers/validate'
import { AppState } from '../../store'
import styled from 'styled-components'
import Button from './Button'

const Header = styled.h1`
  font-weight: 800;
`

const numberNormalizer = (value: string) => {
  return value
    .toUpperCase()
    .replace(/[^0-9]/g, '')
    .slice(0, 16)
}

interface IProps {}

export const CurrencyForm: FC<IProps & InjectedFormProps<{}, IProps>> = ({
  handleSubmit,
  pristine,
  submitting,
}: any) => {
  const currencies = useSelector(
    (state: AppState) => state.calculator.currencies
  )

  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      <Header>Calculate</Header>
      <Field
        name='number'
        type='text'
        component={Input}
        label='Value'
        placeHolder='Enter value'
        normalize={numberNormalizer}
      />
      <Field
        name='currency'
        type='text'
        datas={currencies}
        component={Select}
        label='Currency'
        placeHolder='Select Currency'
      />
      <Button disabled={pristine || submitting}>Next</Button>
    </form>
  )
}

const Form = reduxForm<{}, IProps>({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  form: 'user',
  validate,
})(CurrencyForm)

export default Form
