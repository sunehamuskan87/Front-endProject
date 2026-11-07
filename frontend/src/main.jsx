import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import { BrowserRouter } from 'react-router'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUBLISHABLE_KEY) {
  throw new Error('Missinf clerk publishable key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl = '/'
      signInUrl = '/sign-in'
      signUpUrl = '/sign-up'>
      <App />
    </ClerkProvider>
    </BrowserRouter>
    
    
  </StrictMode>,
)
