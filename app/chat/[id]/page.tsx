import React from 'react'
import Chat from '../../../components/Chat'
import ChatInput from '../../../components/ChatInput'


type Props = {
  params: {
    id: string
  }
}

const ChatPage = ({params: {id}}: Props) => {
  
  
  return (
    <div className='flex flex-col overflow-hidden h-screen'>
      
      {/* Chat */}
      <Chat chatId={id}/>
      {/* ChatInput */}
      <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage