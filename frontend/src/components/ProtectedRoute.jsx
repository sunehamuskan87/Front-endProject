import React, { useEffect } from 'react'
import {useAuth} from '@clerk/react'
// import {useNavigate} from 'react-router'
import { Navigate, useLocation } from 'react-router';

//to protect signIn and SignUp page
const ProtectedRoute = ({children}) => {
  //both are taken from useAuth
  const {isLoaded, isSignedIn} = useAuth();
//   const navigate = useNavigate();
  const location = useLocation();

  if(!isLoaded) {
    return (
        <div>
            <p>Loading...</p>
        </div>
    )
  }
  if(!isSignedIn) {
    // navigate('/sign-in')
    return <Navigate to='/sign-in' state={{from:location}} replace />
  }
  return children;
}

export default ProtectedRoute