import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Chat from './components/Chat'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="chat" element={<Chat />} />
    </Route>
  )
)

export default routes
