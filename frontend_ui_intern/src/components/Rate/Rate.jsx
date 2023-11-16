import React from "react";
import { motion } from "framer-motion";
import './rate.css';
import Timeline from '../Timeline/Timeline'; 
import badge_1 from '../../assets/badge_1.png'
import badge_2 from '../../assets/badge_2.png'
import badge_3 from '../../assets/badge_3.png'
import MotionWrap from '../../utils/MotionWrap';

const Rate = () => {
  const imageVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1 } },
  };
  const textVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1 } },
  };

  return (
    <section className='rate'>
      <p className='sub_heading'>
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
      </p>
      <h1 className='heading'>
        Ever wondered what others think of you?
      </h1>
      <div className='stepss'>
        <hr className='line' />
        <motion.div
          className='badge'
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={badge_1} alt="badge" className='imge' />
        </motion.div>

        <motion.div
          className='badge'
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={badge_2} alt="badge" className='imge' />
        </motion.div>

        <motion.div
          className='badge'
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={badge_3} alt="badge" className='imge' />
        </motion.div>
      </div>
      <div className='steps_content'>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className='texta'
        >
          Answer questions on your social network.
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className='texta'
        >
          Let other anonymous users know you are on the platform.
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className='texta'
        >
          Find out where you stand on your social network and connect with
          others.
        </motion.p>
      </div>
      <div className='timeline'>
        <Timeline type="team" />
      </div>
    </section>
  );
};

export default MotionWrap(Rate);
