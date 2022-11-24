import React from 'react'
import trollFace from './imgs/TrollFace.png'

export default function Header() {
    return (
        <div className='header'>
            <img src={trollFace} className='header--img' alt='trollface'></img>
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--jumba'>Jumba Enterprise</h4>
        </div>
    )
}