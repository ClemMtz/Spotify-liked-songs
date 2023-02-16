import React from 'react'




function SavedSong({track, chooseTrack}) {

 function handlePLay() {
    chooseTrack(track)
  }



  return (
    
  
    <div className='songCard-wrapper' >
      
      <img src={track.img} alt='song' className='song-image'  onClick={handlePLay} />
      <div className='artist-song-wrapper'>
       <h3 className='artist-name'>{track.artist}</h3>
       <p className='song-name'>{track.title}</p>
      </div>

    </div>
   
  )
}

export default SavedSong