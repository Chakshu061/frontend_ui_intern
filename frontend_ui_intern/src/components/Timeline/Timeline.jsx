import React from "react";
import { motion } from "framer-motion";
import './timeline.css' // Replace with your actual CSS module

const Timeline = ({ type }) => {
  switch (type) {
    case "team":
      return (
        <div className='team'>
          <div className='steps'>
            <div className='step'>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className='circle1'></div>
                <p className='text1'>You</p>
              </motion.div>
            </div>
            <div className='step'>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className='circle2'></div>
                <p className='text2'>Anonymous 1</p>
              </motion.div>
            </div>
            <div className='step'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className='circle3'></div>
                <p className='text3'>Anonymous 2</p>
              </motion.div>
            </div>
            <div className='step'>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className='circle4'></div>
                <p className='text4'>Anonymous 3</p>
              </motion.div>
            </div>
          </div>
        </div>
      );
    case "work":
      return (
        <div className='work'>
          <div className='steps'></div>
        </div>
      );
    default:
      return null;
  }
};

export default Timeline;
