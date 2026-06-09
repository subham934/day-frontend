import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { AppRouter } from './router/AppRouter.jsx'
import GamesContext from './context/GamesContext.jsx'

createRoot(document.getElementById('root')).render(
  <GamesContext>
      <RouterProvider router={AppRouter} />
  </GamesContext>,
)
