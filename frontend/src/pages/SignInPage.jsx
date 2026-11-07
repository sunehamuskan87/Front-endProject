import { SignIn } from '@clerk/react'
import React from 'react'

const SignInPage = () => {
  return (
    <div>
        <SignIn routing='path' path='/sign-in' signUpUrl='/sign-up' />
    </div>
    
  )
}

export default SignInPage