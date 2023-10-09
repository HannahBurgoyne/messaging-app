import { User } from '../../../types/User'

interface Props {
  users: User[]
}

function ActiveUsers(props: Props) {
  return (
    <>
      <div className="bg-emerald-300 flex flex-col p-20">
        <h2>Online now</h2>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ActiveUsers
