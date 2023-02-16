import React from 'react'
import Logo from "./assets/logo-spotify-512px.png"

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a007e7aeaad34df6a6a6aef7ec82605e&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


export default function Login() {
  return (
    <div className='login-page-wrapper'>
        <div className='spotify-logo-title-wrapper'>
         <img src={Logo} className="spotify-logo" alt='spotify-logo'/>
         <h1 className='spotify-title'>Spotify</h1>
        </div>
        <button  className='login-button'><a href={AUTH_URL} >Login with Spotify</a></button>
    </div>
  )
}
