import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../assets/logofifa.png'
import './logo.css'

const LogoText = styled.h1`
font-family: 'Montserrat', cursive;
font-size: ${props => props.theme.fontxxl};
// color: ${props => props.theme.text};
/* color: #ffd400; */
transition: all 0.2s ease;
// img{
//   width:12rem;
//   height:100%;
// }

&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
font-size: ${props => props.theme.fontxl};

}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
          <div className="logo">

        <img src={LOGO}></img>
          </div>
        
        </Link>
    </LogoText>
  )
}

export default Logo