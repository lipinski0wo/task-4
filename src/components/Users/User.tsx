import React, { SFC } from 'react'
import styled from 'styled-components'
import { ISingleUser } from '../../store/users/types'

interface IWrapperProps {
  webformatURL: string
  fullHDURL: string
}

const UserHeader = styled.h2`
  width: 100%;
  padding: 10px 4px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  opacity: 0.2;
`

const Wrapper = styled.div`
  flex: 1 33%;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 300px;
  background: red;
  background: lightblue
    url(${({ webformatURL }: IWrapperProps) => webformatURL}) no-repeat center;
  cursor: pointer;
  &:hover {
    background-image: url(${({ fullHDURL }: IWrapperProps) => fullHDURL});
  }
  &:hover ${UserHeader} {
    opacity: 1;
  }
`

const User: SFC<ISingleUser> = ({ webformatURL, fullHDURL, user }) => {
  return (
    <Wrapper webformatURL={webformatURL} fullHDURL={fullHDURL}>
      <UserHeader>{user}</UserHeader>
    </Wrapper>
  )
}

export default User
