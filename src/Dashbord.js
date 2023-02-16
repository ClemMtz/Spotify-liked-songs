import React from 'react'
import { useEffect, useState } from 'react'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import Player from "./Player"
import SavedSong from './SavedSong'
import ExpandArrow from './assets/icons8-expand-arrow-50.png'
import CollapseArrow from './assets/icons8-collapse-arrow-50.png'
import { useTransition, animated } from '@react-spring/web'






const SpotifyApi = new SpotifyWebApi({
    clientId: 'a007e7aeaad34df6a6a6aef7ec82605e'
    
  })

 function Dashbord({code}) {
  const accessToken = useAuth(code)
  const [mySavedTracks, setMySavedTracks] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [showLibrary, setShowLibrary] = useState(false)
  const transition = useTransition(showLibrary, {
    from: {opacity:0},
    enter: {opacity:1},
    leave: {opacity:0}
  })
 
  

  
  

  function chooseTrack(track) {
    setPlayingTrack(track)
    
  }
  
  
  const savedSongElement =  mySavedTracks.map(track =>(
    <SavedSong track={track} key={track.uri} chooseTrack={chooseTrack} /> 
    ))

  function toggleShowLibrary() {
    setShowLibrary(prevShowLibrary => !prevShowLibrary)
  }



 useEffect(() => {
   if(!accessToken) return
   SpotifyApi.setAccessToken(accessToken)
 },[accessToken])



 useEffect(() => {
  if(!accessToken) return
  SpotifyApi.getMySavedTracks().then(res => {
    setMySavedTracks(res.body.items.map(item => {
      return{
        artist: item.track.artists[0].name,
        title: item.track.name,
        img: item.track.album.images[1].url,
        uri: item.track.uri
      }
      
      
    }))
 
  })
 
  
 },[ accessToken])





  return (
    <>
       
      <Player  accessToken={accessToken}  trackUri={playingTrack?.uri}/>
     
    {showLibrary ?
      <div>
       <div className='arrow-wrapper'>
         <img src={CollapseArrow} alt='collapse arrow' className='arrow' onClick={toggleShowLibrary}/>
       </div>
      </div>
       
       :
      
      <div className='arrow-wrapper'>
       <img src={ExpandArrow} alt='expand arrow' className='arrow' onClick={toggleShowLibrary}/>
      </div>
    }
    {transition ((style,item) =>
     item ? <animated.div style={style} className='library-wrapper'>{savedSongElement}</animated.div> : ''
    )}  
   </>
  )
}

export default Dashbord