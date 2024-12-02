import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider, { AppContext } from './context/AppContext.jsx'
import AdminContextProvider from './context/AdminContext.jsx'
import CreatorContextProvider from './context/CreatorContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <CreatorContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>

      </CreatorContextProvider>

    </AdminContextProvider>


  </BrowserRouter>


)
