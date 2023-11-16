import React from "react";
import { motion } from "framer-motion";
import { work } from "../../Constants"; 
import Card from "../Card/Card"; 
import MotionWrap from "../../utils/MotionWrap"; 
import ghost4 from '../../assets/ghost4.png'

import './work.css' 

const Work = () => {
  return (
    <section className="work">
      <div className="headered">
        <motion.div
          className="titlea"
          initial={{ x: -100, y: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
        >
          Work with us
        </motion.div>
        <motion.div
          className="imgea"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
        >
          <p className='ahead'>ahead</p>
        </motion.div>
      </div>
      <div className="body">
        <div className="lefts">
          <img src={ghost4} alt="imgea" className="ghost4" />
          <div className="abouts">
            <h1>About</h1>
            <p>
              We are a team of passionate people who love to build amazing
              products. We really love our work, and we do it with pleasure.
            </p>
          </div>
          <div className="product">
            <h1>Product</h1>
            <p>
              We are a team of passionate people who love to build amazing
              products. We really love our work, and we do it with pleasure.
            </p>
          </div>
        </div>
        <div className="rightss">
          <div className="cardss">
            {work.map((item) => (
              <Card
                key={item.id}
                heading={item.title}
                desc={item.text}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Work);
