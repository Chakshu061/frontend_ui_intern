import React from 'react'
import DownloadApp from '../../assets/DownloadApp.png'
import review from '../../assets/review.png'
import './container1.css'
import phone from '../../assets/phone.png'
import { motion } from "framer-motion";
import MotionWrap from '../../utils/MotionWrap'
import leaf from '../../assets/leaf.png'
import lightpinkblob from '../../assets/lightpinkblob.png'
import redblob from '../../assets/redblob.png'
import mul from '../../assets/mul.png'
import ghost5 from '../../assets/ghost5.png'
import ghost3 from '../../assets/ghost3.png'
import ghost4 from '../../assets/ghost4.png'
import blueGhost from '../../assets/blueGhost.png'
import redGhost from '../../assets/redGhost.png'
import purpleGhost from '../../assets/purpleGhost.png'


const Container1 = () => {
  
  return (
    <>
    
    <div className='container'>
        
        <div className='left stack-top'>
        <img className ='pinkb' src={lightpinkblob} alt="bigleaf"/>
        <img className ='bigleaf' src={leaf} alt="bigleaf"/>
        <img className ='mulcon' src={mul} alt="bigleaf"/>
        <img className ='smallleaf' src={leaf} alt="bigleaf"/>
        
        
        <img className ='medipink' src={lightpinkblob} alt="bigleaf"/>
        
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
      
        >
          Ahead app
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
         
        >
          Master your life <br /> by mastering <br /> emotions
        </motion.h2>
            
            <div className='imagebar'>
               <img src={ DownloadApp } alt='ios'/>
               <img src={ review } alt='review'/>
            </div>   
        </div>
        <div className='right'>
            <img className ='mediumpink' src={lightpinkblob} alt="bigleaf"/>
            <img className ='blueGhost' src={blueGhost} alt="bigleaf"/>
             <img className ='ghostn5' src={ghost5} alt="bigleaf"/>
           <div className="dot">
             
               <div className='circle'>
                   <img src={phone} alt='phone'/>
                </div>
           </div>
           <img className ='redGhost' src={redGhost} alt="bigleaf"/>
             <img className ='ghostn3' src={ghost3} alt="bigleaf"/>
             <img className ='purpleGhost' src={purpleGhost} alt="bigleaf"/>
             <img className ='ghostn4' src={ghost4} alt="bigleaf"/>
             <img className ='redblob' src={redblob} alt="bigleaf"/>  
        </div>
        
             
    </div>
    </>
  )
}

export default MotionWrap(Container1)