import React from 'react'
import { useNavigate } from 'react-router-dom'
import MessageBar from './MessageBar'

function ChatBody() {
  return (
    <>
      <section className="p-12">
        <div>
          <div className="fixed right-0 m-12">
            <p>You</p>
            <div className="bg-teal-300 p-4">
              <p>Hello</p>
            </div>
          </div>
        </div>

        <div>
          <p>Other</p>
          <div className="bg-gray-300 p-4">
            <p>Hey</p>
          </div>
        </div>

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
