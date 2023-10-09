import ActiveUsers from '../UI/ActiveUsers'
import ChatBody from '../UI/ChatBody'
import MessageBar from '../UI/MessageBar'

function Chat() {
  return (
    <>
      <div className="flex flex-row">
        <ActiveUsers />
        <ChatBody />
      </div>
      <MessageBar />
    </>
  )
}
export default Chat
