import React from 'react'
import BtnLogin from './BtnLogin'

const OAuth = ({ providers, csrfToken }) => {
    return (
        <div>
            <BtnLogin provider={providers.google} bgColor='#DB4437'
                txtColor='#fff' csrfToken={csrfToken} />
            <BtnLogin provider={providers.facebook} bgColor='#4267B2'
                txtColor='#fff' csrfToken={csrfToken} />
            <BtnLogin provider={providers.github} bgColor='#444'
                txtColor='#fff' csrfToken={csrfToken} />
        </div>
    )
}

export default OAuth
