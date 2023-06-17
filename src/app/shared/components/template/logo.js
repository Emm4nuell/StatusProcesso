import React from 'react'
import './logo.css'
import Img from '../img/logo.png'



export const logo = () => {
    return (
        <div className='logo'>
            <img src={Img} alt='logo' />
            <span>MEU PROCESSO</span>
        </div>
    )
}