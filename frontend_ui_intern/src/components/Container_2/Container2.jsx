import React from 'react'
import ghost1 from '../../assets/ghost1.png'
import leaf from '../../assets/leaf.png'
import redblob from '../../assets/redblob.png'
import lightpinkblob from '../../assets/lightpinkblob.png'
import flower from '../../assets/flower.png'
import mul from '../../assets/mul.png'
import './container2.css'
import { motion } from "framer-motion";
import MotionWrap from '../../utils/MotionWrap'


const Container2 = () => {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } },
      };
    
      const headerVariants = {
        initial: { x: -100 },
        animate: { x: 0, transition: { duration: 1 } },
      };
    
      const circle1Variants = {
        initial: { x: '400%', y: '30%' },
        animate: {
          x: '-20%',
          transition: { duration: 2 },
        },
        transition: {
          y: '-50%',
          transition: { duration: 2, delay: 2 },
        },
      };
    
      const leaf1Variants = {
        initial: { x: '110%', y: '150%', rotate: 0 },
        animate: { y: 0, x: 0, rotate: 360, transition: { duration: 2 } },
      };
    
      const leaf2Variants = {
        initial: { rotate: 0 },
        animate: { rotate: 360, transition: { duration: 2 } },
      };
    
      const circle2Variants = {
        initial: { y: '100%' },
        animate: { y: 0, transition: { duration: 1 } },
      };


  return (
    <>
    
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
    <div className='Contain'>
    
        <motion.p variants={headerVariants}>Built out of frustration</motion.p>
        <motion.h2 variants={headerVariants}>Meet the ahead app</motion.h2>
        <div className='cont'>
        <div className='left2'>
            
            <div className='imageBar'>
                <img className='ghost1' src={ghost1} alt='ghost'/>
                
                <motion.div><img className='mul1' src={mul} alt='mul'/></motion.div>
                <motion.div variants={leaf1Variants}><img className='leaf1' src={leaf} alt='leaf'/></motion.div>
                <motion.div variants={circle1Variants}><img className='pinkblob1' src={lightpinkblob} alt='pink'/></motion.div>
            </div>
        </div>
        <div className='right2'>
        <motion.div variants={circle1Variants}><img src={flower} className='flower' alt='flower'/></motion.div>
        <motion.div  variants={leaf2Variants}><img src={leaf} className='leafss' alt='leaf'/></motion.div>
            <h3>A personalized pocket couch that provides bite-sized, science-driven tools to boost emotional intelligence.</h3>
            <br></br>
            <h3>
                Think of it as a pocket cheerleader towards a better, more fullfilling.
            </h3>
        </div>
        </div>
    </div>
    </motion.div>
    </>
  )
}

export default MotionWrap(Container2)