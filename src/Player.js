import React, { useEffect, useState } from 'react'
import SpotifyPlayer from "react-spotify-web-playback"

function Player({ accessToken, trackUri}) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])
    

    if(!accessToken) return 
    return(
     <div className='spotify-player-wrapper'>
        <SpotifyPlayer
        styles={{   activeColor: '#fff',
        bgColor: '#000',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#fff',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',}}
        token={accessToken}
        showSaveIcon
        callback={state => {
         if(state.isPlaying) setPlay(false)
         }}
        play={play}
        uris={trackUri ? [trackUri] : []}
       />
    </div>

    )
}

export default Player