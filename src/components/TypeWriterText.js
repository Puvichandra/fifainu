import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';
import './typewriter.css'
import Text from '../assets/yellowtext.png'

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  position: relative;
    font-family: monospace;


  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1{
      color: blue;
  }
  .text-2{
      color: orange;
  }
  .text-3{
      color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontlg};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }

  
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
  position: relative;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`

const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`
const TypeWriterText = () => {
  return (
    <div className="type__container">
      <div className="text__img">

      <img src={Text} alt="img" />
      </div>
        <Title>
        Fifa Inu is the newest dog in the Binance Smart Chain ready to kick things off to the next level with world cup being soon.
      {/* <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-1">binance smart chain.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-2">binance smart chain.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">binance smart chain.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      /> */}
      
    </Title>
    <SubTitle>Contract: 0xbbc915692c2f94af359dcf2bd1890d93e4e1639e</SubTitle>
    <ButtonContainer>
    <a href="https://www.pinksale.finance">
      <Button text="Buy Now" link="https://pancakeswap.finance/swap?outputCurrency=0xbbc915692c2F94AF359dCF2bd1890d93e4e1639E" />
      </a>
    </ButtonContainer>
    </div>
  );
};

export default TypeWriterText;
