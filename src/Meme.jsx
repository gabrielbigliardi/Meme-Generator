import React from 'react'
import './App.css'
import memesData from './memesData'

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const memeUrl = memesArray[randomNumber].url
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main className='meme'>
            <div className='meme--form'>
                <input 
                    className='meme--input' 
                    placeholder='top text' 
                    type="text" 
                />
                <input 
                    className='meme--input' 
                    placeholder='bottom text' 
                    type="text" />
                <button 
                    className='meme--button'
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
                <img className='meme--image' src={memeImage}></img>
            </div>
        </main>
    )
}