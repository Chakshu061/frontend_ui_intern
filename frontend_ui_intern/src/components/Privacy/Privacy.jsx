import React from 'react'
import { motion } from 'framer-motion'
import MotionWrap from '../../utils/MotionWrap'
import './privacy.css'

const Privacy = () => {
  return (
    <motion.div
       initial="initial"
      animate="animate"
    >
    <div className='mainCont'>
        <p>We take privacy seriously</p>
        <h1>Before you get started</h1>
        <h2>"We won't share your answers with anyone (and won't ever tell
        <br></br> you which friends said what about you)"</h2>
        <p>with love,  <span>Team ahead</span> </p>
        <button className='nav-button start-but'>Start a test</button>
        <h3>Take only 5 minutes</h3>
    </div>
    </motion.div>
  )
}

export default MotionWrap(Privacy)