import { useState } from 'react'
import React from 'react'
import BtnLogin from './BtnLogin'

const Email = ({ providers, csrfToken }) => {
    const [email, setEmail] = useState('')
    return (
        <BtnLogin provider={providers.email} csrfToken={csrfToken} options={{ email }}
            bgColor='#D2386C' txtColor='#fff'>
            <div>
                <label htmlFor="Email address"></label>
                <input type="text" className="form-control w-100" id='email' name='email' placeholder='email@example.com' required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
        </BtnLogin>
    )
}

export default Email
