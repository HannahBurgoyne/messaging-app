import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import routes from './routes.tsx'

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  )
})
