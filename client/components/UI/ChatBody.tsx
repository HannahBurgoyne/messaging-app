import React from 'react'
import { useNavigate } from 'react-router-dom'

function ChatBody() {
  const navigate = useNavigate()

  function leaveChat() {
    localStorage.removeItem('username')
    navigate('/')
    window.location.reload()
  }

  return (
    <>
      <div>
        <header>
          <button onClick={leaveChat}>Leave chat</button>
        </header>

        <section>
          <div>
            <div>
              <p>You</p>
              <div>
                <p>Hello</p>
              </div>
            </div>
          </div>

          <div>
            <p>Other</p>
            <div>
              <p>Hey</p>
            </div>
          </div>

          <div>
            <p>User is typing...</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default ChatBody
