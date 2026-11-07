import { Routes, Route } from 'react-router'
import './App.css'
import SignInPage from './pages/SignInPage'
import Home from './Home'
import SignUpPage from './pages/SignUpPage'
import ProtectedRoute from './components/ProtectedRoute'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignInPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
        <Route path='/profile/*' element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App