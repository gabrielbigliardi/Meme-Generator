import React from 'react'
import './App.css'
import memesData from './memesData'

export default function Meme(){
    return (
        <main className='meme'>
            <div className='meme--form'>
                <input className='meme--input' placeholder='top text' type="text" />
                <input className='meme--input' placeholder='bottom text' type="text" />
                <button className='meme--button'>Get a new meme image  🖼</button>
                <img href={memesData.data.memes[0]}></img>
            </div>
        </main>
    )
}