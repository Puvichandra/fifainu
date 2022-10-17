import React from 'react'
import './partners.css'
// import Gempad from '../../assets/gempad.png'
import Bsc from '../../assets/bscscan.svg'
import Pancake from '../../assets/pancake.png'
import Poocoin from '../../assets/poocoin.png'
import Pinksale from '../../assets/pinksale.png'

const Partners = () => {
  return (
    
    <section class='partners'>
    {/* <h3>Our Partners</h3> */}
    <div class='partners-img-container'>
      <div class='partners-img'>
        <a href='https://www.pinksale.finance'>
            <img src={Pinksale}></img>
        </a>
        <a href='https://bscscan.com/'>
            <img src={Bsc}></img>
        </a>
        <a href='https://pancakeswap.finance/'>
            <img src={Pancake}></img>
        </a>
        <a href='https://poocoin.app/'>
            <img src={Poocoin}></img>
        </a>
      </div>
    </div>
  </section>
  )
}

export default Partners