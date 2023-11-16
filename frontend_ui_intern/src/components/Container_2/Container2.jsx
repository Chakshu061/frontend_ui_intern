import React from 'react'
import ghost1 from '../../assets/ghost1.png'
import leaf from '../../assets/leaf.png'
import redblob from '../../assets/redblob.png'
import lightpinkblob from '../../assets/lightpinkblob.png'
import mul from '../../assets/mul.png'
import './container2.css'

const Container2 = () => {
  return (
    <div className='Contain'>
        <p>Built out of frustration</p>
        <h2>Meet the ahead app</h2>
        <div className='cont'>
        <div className='left2'>
            
            <div className='imageBar'>
                <img className='ghost1' src={ghost1} alt='ghost'/>
                
                <img className='mul1' src={mul} alt='mul'/>
                <img className='leaf1' src={leaf} alt='leaf'/>
                <img className='pinkblob1' src={lightpinkblob} alt='pink'/>
            </div>
        </div>
        <div className='right2'>
            <h3>A personalized pocket couch that provides bite-sized, science-driven tools to boost emotional intelligence.</h3>
            <br></br>
            <h3>
                Think of it as a pocket cheerleader towards a better, more fullfilling.
            </h3>
        </div>
        </div>
    </div>
  )
}

export default Container2