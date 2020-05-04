import React, { useState, useEffect, SFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from './User'
import { AppState } from '../../store'
import styled from 'styled-components'
import { getUsers } from '../../store/users/actions'
import Info from '../General/Info'
import { ISingleUser } from '../../store/users/types'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const Users: SFC = () => {
  const users = useSelector((state: AppState) => state.users.users)
  const loadedPage = useSelector((state: AppState) => state.users.loadedPage)
  const [pageCount, setPageCount] = useState(-1)

  const dispatch = useDispatch()

  useEffect(() => {
    const scrollListen = () => {
      if (loadedPage !== pageCount) return

      if (
        window.pageYOffset + window.innerHeight + 100 >
        document.body.offsetHeight
      ) {
        setPageCount(pageCount + 1)
        dispatch(getUsers(pageCount + 1))
      }
    }

    if (pageCount === -1) {
      dispatch(getUsers(1))
      setPageCount(1)
    }

    window.addEventListener('scroll', scrollListen, true)
    return () => {
      window.removeEventListener('scroll', scrollListen, true)
    }
  }, [dispatch, loadedPage, pageCount])

  if (users.length === 0) {
    return <Info>Nothing to display</Info>
  }
  return (
    <Wrapper>
      {users.map((user: ISingleUser) => (
        <User
          key={user.id}
          id={user.id}
          webformatURL={user.webformatURL}
          fullHDURL={user.fullHDURL}
          user={user.user}
        />
      ))}
    </Wrapper>
  )
}

export default Users
