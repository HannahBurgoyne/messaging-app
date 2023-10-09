import { Outlet } from 'react-router-dom'
import Background from './UI/Background'

export default function App() {
  return (
    <>
      <Background>
        <Outlet />
      </Background>
    </>
  )
}
