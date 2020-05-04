import { FormErrors } from 'redux-form'

interface AddUserParams {
  number: number
  currency: string
}

const validate = (values: AddUserParams): FormErrors<AddUserParams> => {
  const errors: FormErrors<AddUserParams> = {}

  if (!values.currency) {
    errors.currency = 'Select currency'
  }

  if (!values.number) {
    errors.number = 'Set value'
  }

  return errors
}
export default validate
