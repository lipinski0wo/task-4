import React, { FC, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import Loading from './Loading'
import Message from './Message'
import loggedMessage from './loggedMessage'

const LoggedMessage = loggedMessage(Message)

const Bob: FC = () => {
  const general = useSelector((state: AppState) => state.general)

  return (
    <Fragment>
      {general.loading !== 0 && <Loading />}
      {general.msg.length !== 0 &&
        general.msg.map((msg, index) => (
          <LoggedMessage key={msg.id} msg={msg} index={index} />
        ))}
    </Fragment>
  )
}

export default Bob
