import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.mp4'
import GIF1 from '../assets/Home GIF.gif'
import IMG1 from '../assets/logofifa.png'



const VideoContainer = styled.div`
width: 100%;

img{
    width: 90%;
    height: auto;
    animation: bounce 3s infinite alternate;
  
  
}
@keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-50px); } }

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
      <img src={IMG1}></img>
        {/* <video src={GIF} type="video/mp4" autoPlay muted loop  /> */}
    </VideoContainer>
  )
}

export default CoverVideo