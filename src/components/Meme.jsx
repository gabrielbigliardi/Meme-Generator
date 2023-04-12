// import { random } from "lodash"
import React from "react"

export default function Meme() {

    const [ meme, setMeme ] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4xgqu.jpg"
    })


    const [ allMemes, setAllMemes ] = React.useState()


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function getMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme( prevMeme => ({ ...prevMeme, randomImage: url }))
    }


    function handleMeme(event) {
        const { name, value } = event.target
        // console.log(value)
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <div className="form">
            <div className="meme--inputs">
                <input 
                    type="text"
                    placeholder="Upper text" 
                    className="meme--up-input" 
                    value={meme.topText}
                    name='topText'
                    onChange={handleMeme}
                    />
                <input 
                    type="text" 
                    placeholder="Down text" 
                    className="meme--down-input" 
                    value={meme.bottomText}
                    name='bottomText'
                    onChange={handleMeme}
                    />
            </div>
            <button className="meme--button" onClick={getMeme} >Get a new meme image 🖼</button>

            <div className="meme">
                <img className="meme--img" src={meme.randomImage} alt="Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}