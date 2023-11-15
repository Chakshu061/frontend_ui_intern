import React from 'react'
import DownloadApp from '../../assets/DownloadApp.png'
import review from '../../assets/review.png'
import './container1.css'
import phone from '../../assets/phone.png'


const Container1 = () => {
  return (
    <div className='container'>
        <div className='left stack-top'>
            <p>Ahead app</p>
            <h2>Master your life</h2>
            <h2> by mastering</h2>
            <h2>emotions</h2>
            <div className='imagebar'>
               <img src={ DownloadApp } alt='ios'/>
               <img src={ review } alt='review'/>
            </div>   
        </div>
        <div className='right'>
           <div className="dot">
               <div className='circle'>
                   <img src={phone} alt='phone'/>
                </div>
           </div>  
        </div>
    </div>
  )
}

export default Container1