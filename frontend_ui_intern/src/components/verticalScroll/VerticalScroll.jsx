import React, { useRef, useEffect, useState } from 'react';
import './verticalScrolll.css'
import { improve } from '../../Constants';
import { motion } from 'framer-motion';
import ghost3 from '../../assets/ghost3.png'
import MotionWrap from '../../utils/MotionWrap'


const VerticalScroll = () => {
  const [activeDot, setActiveDot] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveDot(0);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  const handleScroll = (event) => {
    const container = event.target;
    const itemHeight = container.clientHeight / improve.length;
    const maxActiveDot = improve.length - 1;

    if (event.deltaY > 0 && activeDot < maxActiveDot) {
      setActiveDot(activeDot + 1);
    } else if (event.deltaY < 0 && activeDot > 0) {
      setActiveDot(activeDot - 1);
    }
  };

  return (
    <section className='improvement'>
      <div className='high'>
        <motion.div
          className='con'
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 200,
            damping: 30,
          }}
        >
          <p>Wrong improvement and how we are fixing it.</p>
          <motion.h1
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 200,
              damping: 30,
            }}
          >
            Self-improvement. Ugh.
          </motion.h1>
        </motion.div>

        <motion.div
          className='ghosty'
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: 'tween' }}
        >
          <img src={ghost3} alt={'ghost'} />
        </motion.div>
      </div>
      <div className='timel' ref={ref} onWheel={handleScroll}>
        {improve?.map((item, index) => (
          <motion.div
            key={index}
            className={
              activeDot === index ? `${'card_active'}` : 'cardy'
            }
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 200,
              damping: 30,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            onClick={() => setActiveDot(index)}
          >
            <div className='lime'>
              <div className='circled'></div>
            </div>
            <div className='con'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MotionWrap(VerticalScroll);
