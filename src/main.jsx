import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContextApi from './Context/ContextApi.jsx'
import AddUser from './pages/AddUser.jsx'


const route = createBrowserRouter([
  {
    path : '/',
    element : <App/>
  },
  {
    path : '/adduser',
    element : <AddUser/>
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ContextApi>


      <RouterProvider router={route}>
        <App/>
      </RouterProvider>

    </ContextApi>







  </StrictMode>,
)
