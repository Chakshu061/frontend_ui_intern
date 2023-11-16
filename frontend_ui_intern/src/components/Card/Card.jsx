import './card.css'
import { motion } from "framer-motion";

const Card = ({
  type,
  heading,
  bullets,
  desc,
  emoji,
  color,
  rotation,
  text,
}) => {
  switch (type) {
    case "emoji":
      return (
        <div
          className='emoji'
          style={{
            backgroundColor: color,
            transform: `rotate(${rotation}deg)`,
            color: text,
          }}
        >
          <span className='iamg' role="img" aria-label="emoji">
            {emoji}
          </span>
          <h1 className='head'>{heading}</h1>
          <p className='headp'>{desc}</p>
        </div>
      );
    case "text":
      return (
        <div className='texti'>
          <h1>{heading}</h1>
          <p>{desc}</p>
        </div>
      );
    case "bullet":
      return (
        <div className='bullet'>
          <h1>{heading}</h1>
          <ul>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <button className='nav-button det'>See details</button>
          </motion.div>
        </div>
      );
    default:
      return (
        <div className='emoji'>
          <span role="img" aria-label="emoji">
            {emoji}
          </span>
          <h1>{heading}</h1>
          <p>{desc}</p>
        </div>
      );
  }
};

export default Card;