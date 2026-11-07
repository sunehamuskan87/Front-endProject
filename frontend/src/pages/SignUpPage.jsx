import { SignUp } from '@clerk/react'
import React from 'react'

const SignUpPage = () => {
  return (
    <div>
        <SignUp routing='path' path='/sign-up' signInUrl='/sign-in' />
    </div>
  )
}

export default SignUpPage