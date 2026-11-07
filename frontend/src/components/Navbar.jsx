import { Show, UserButton, useUser } from '@clerk/react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    const user = useUser();
    console.log(user);
    return (
        <nav>
            <div>
                <Link to='/'>TastyGo</Link>
                <div>
                    <Link tp='/menu'>Menu</Link>
                    <Link to='/cart'>Cart</Link>

                    <Show when='signed-in'>
                        <span>Hi {user.name}</span>
                        <UserButton />
                    </Show>
                </div>
            </div>
        </nav>

    )
}

export default Navbar