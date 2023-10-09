import React from 'react'
import MessageBar from './MessageBar'
import { Message } from '../../../types/Message'

interface Props {
  messages: Message[]
}

function ChatBody(props: Props) {
  return (
    <>
      <section className="p-12">
        {props.messages.map((message) =>
          message.name === localStorage.getItem('username') ? (
            <div>
              <div className="fixed right-0 m-12">
                <p>You</p>
                <div className="bg-teal-300 p-4">
                  <p>{message.text}</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p>{message.name}</p>
              <div className="bg-gray-300 p-4">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className="fixed bottom-0 mb-20">
          <p>User is typing...</p>
        </div>
      </section>
      <section>
        <MessageBar />
      </section>
    </>
  )
}

export default ChatBody
