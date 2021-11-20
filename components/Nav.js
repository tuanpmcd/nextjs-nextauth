import React from 'react'
import { useSession, signOut } from 'next-auth/client'

const Nav = () => {
    const [session, loading] = useSession()
    if (!session) return null
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex">
                <div className="navbar-brand fw-bolder" href="#">
                    <span>PMT</span>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={session.user.image || 'https://res.cloudinary.com/pmtdev/image/upload/v1634800837/avatar_user_pfivg6.png'} className='img-fluid rounded-circle' width={30} height={30} alt="logo" />

                    <h6 className="me-3 ms-1 mt-2 text-danger text-capitalize">
                        {session.user.name || "Guest"}
                    </h6>

                    <button className='btn btn-dark' onClick={() => signOut()} >
                        Logout
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default Nav
