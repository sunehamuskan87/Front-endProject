import { UserProfile } from '@clerk/react'
import React from 'react'

const ProfilePage = () => {
  return (
    <div>
      <UserProfile routing='path' path='/profile' />
    </div>
  )
}

export default ProfilePage