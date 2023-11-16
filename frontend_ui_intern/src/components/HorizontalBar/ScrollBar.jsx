import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import './scrollbar.css'



const ScrollBar = () => {

    
    
  return (
    <>
    <div className='bar'>
          <h1>Does this sound familiar...</h1>

        <div className='bar-loop'>
        <ul className="list scroller_inner">
        <li className='colu1'>
            <h2>&#128532;</h2>
            <h3>You Collaborate on a Project</h3>
            <p>You and your colleague have different perspectives, but instead of arguing, you engage in a constructive conversation</p>
        </li>
        <li className='colu1'>
            <h2>&#128532;</h2>
            <h3>You React Impulsively to Feedback</h3>
            <p>During a feedback session, you receive constructive criticism from a colleague. Instead of staying calm and open to improvement, you become defensive and dismissive</p>
        </li>
        <li className='colu1'>
            <h2>&#128532;</h2>
            <h3>Celebrating Success Together</h3>
            <p>Your team achieves a major milestone, and everyone is thrilled. You express genuine joy, celebrate each other's contributions, and foster a positive team spirit</p>
        </li>
        <li className='colu1'>
            <h2>&#128532;</h2>
            <h3>Reacting Jealously to a Colleague's Success</h3>
            <p>YA colleague receives recognition for their achievements, and instead of celebrating their success, you feel jealous and harbor negative emotions</p>
        </li>
        <li className='colu1'>
            <h2>&#128532;</h2>
            <h3>Handling Stress with Resilience</h3>
            <p>YFacing a tight deadline, you remain calm under pressure. You prioritize tasks, communicate effectively with your team, and find solutions instead of succumbing to stress.</p>
        </li>
        <li className='colu1'>
            <h2>&#128532;</h2>
            <h3>Showing Empathy During Challenging Times</h3>
            <p>A colleague is going through a difficult personal situation. Instead of remaining indifferent, you offer support, show empathy, and provide assistance where possible</p>
        </li>
        <li className='colu1'>
            <h2>&#128532;</h2>
            <h3>You Collaborate on a Project</h3>
            <p>You and your colleague have different perspectives, but instead of arguing, you engage in a constructive conversation</p>
        </li>
        <li className='colu1'>
            <h2>&#128532;</h2>
            <h3>Undermining a Teammate's Contribution</h3>
            <p> In a team meeting, a colleague presents an idea, and instead of offering constructive feedback, you undermine their contribution, damaging team morale and inhibiting creative collaboration.</p>
        </li>
        </ul>
        
    </div>
      </div>

      
      </>
  )
};










  
  export default ScrollBar;
  

