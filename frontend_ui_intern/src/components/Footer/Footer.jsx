import React from 'react'
import './footer.css'
import LOGO from '../../assets/LOGO.webp'
import DownloadApp from '../../assets/DownloadApp.png'
import mail from '../../assets/mail.png'
import location from '../../assets/location.png'
import { motion } from 'framer-motion'
import MotionWrap from "../../utils/MotionWrap";

const Footer = () => {
  return (
    <>
    
    <div className='Main'>
        <img className='logp' src={LOGO} alt='logo'/>
        <p className='purple'>ahead</p>
        <div className='loca'>
            <div className='loca1'>
                
                <img src={location} alt='location'/>
                <p>Auguststraße 26, 10117 Berlin</p>
            </div>
            <div className='loca1'>
            <img src={mail} alt='mail'/>
                <p>hi@ahead-app.com</p>
            </div>
        </div>
        <img className='ios' src={DownloadApp} alt='download'/>
        <h3>© 2023 Ahead app. All right reserved - Chakshu Shaktawat
        </h3>
    </div>
    </>
  )
}

export default MotionWrap(Footer)