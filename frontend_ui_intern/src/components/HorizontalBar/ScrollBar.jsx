import React from 'react';
import { motion } from 'framer-motion';
import  Card from '../Card/Card';
import { emoji } from '../../Constants'; 
import MotionWrap from '../../utils/MotionWrap'; 
import './scrollbar.css'

const ScrollBar = () => {
  const headerVariants = {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.2, type: 'spring', stiffness: 80 },
    },
  };

  return (
    <div className="sound">
      <motion.div className="header2" variants={headerVariants}>
        <h1>Does this sound familiar...</h1>
      </motion.div>
      <motion.div
        className="cards2"
        whileInView={{
          x: [0, 100, 0],
          opacity: [0, 0, 1],
          transition: { type: 'spring', stiffness: 80 },
        }}
      >
        {emoji.map((item, index) => (
          <Card
            key={index}
            type={item.type}
            emoji={item.emoji}
            heading={item.heading}
            desc={item.desc}
            color={item.color}
            rotation={item.rotation}
            text={item.text}
            className='texty'
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MotionWrap(ScrollBar);
