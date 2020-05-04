import React, { SFC } from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`
interface IProps {
  disabled?: Boolean
  onClick?: any
}

const Button: SFC<IProps> = ({ children, ...props }: any) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

export default Button
