import React, { FC } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  padding-right: 10px;
  width: 65px;
  display: inline-block;
`

const StyledInput = styled.input`
  padding: 5px 0;
`
const Wrapper = styled.div`
  padding: 5px 0;
`
const Info = styled.p`
  padding: 5px 0;
  margin: 0;
  font-size: 12px;
  color: #f00;
`
interface IInputProps {
  label: String
  type: string
  placeHolder: string
  disabled: boolean
  meta: {
    error: string
    touched: boolean
  }
  [key: string]: any
}

const Input: FC<IInputProps> = (field: IInputProps) => (
  <Wrapper>
    <Label>{field.label}</Label>
    <StyledInput
      {...field.input}
      type={field.type}
      placeholder={field.placeHolder}
      disabled={field.disabled}
    />
    {field.meta.touched && field.meta.error && <Info>{field.meta.error}</Info>}
  </Wrapper>
)

export default Input
