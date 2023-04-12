import React from 'react'
import './style.css'

export default function Header() {
  return (
    <nav className="nav">
      <div className="nav--troll--title">
        <img src={require(`../imgs/Troll Face.png`)} className="nav--troll-face" alt='Troll' />
        <h1 className="nav--title">Meme Generator</h1>
      </div>
      <h3 className="nav--description">React Course - Project 3</h3>
    </nav>
  )
}
