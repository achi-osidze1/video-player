import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({title,IMDb,url}) => {
  return (
    <div className='video'>
        <h3>{title}</h3>
        <h3>{IMDb}</h3>
        <ReactPlayer controls url={url}/>
    </div>
  )
}

export default Video