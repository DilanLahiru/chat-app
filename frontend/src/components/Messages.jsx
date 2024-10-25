import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages