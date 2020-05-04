import React, { useEffect, FC, ComponentType } from 'react'
import { IMsg } from '../../store/general/types'

interface loggedMessageProps {
  msg: IMsg
}

const loggedMessage = <P extends object>(
  Component: ComponentType<P>
): FC<P & loggedMessageProps> => (props: loggedMessageProps) => {
  const msg = props.msg

  useEffect(() => {
    console.warn(`Error occured: ${msg.type} - ${msg.name}`)
  }, [msg])

  return <Component {...(props as P)} />
}

export default loggedMessage
