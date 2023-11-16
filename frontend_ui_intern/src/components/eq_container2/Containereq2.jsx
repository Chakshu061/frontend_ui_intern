import React from 'react'
import './containereq2.css'
import MotionWrap from '../../utils/MotionWrap'

const Containereq2 = () => {
  return (
    <div className='Content'>
        <div className='first'>
            <h1>Be the best you
            with EQ</h1>
        </div>
        <div className='first'>
            <p>
                Not having your own emotions 
                under control might be holding you back.
            </p>
        </div>
        <div className='first'>
            <p>
                Additionally, not understanding those of others stops you from being parent, friend you can be.
            </p>
        </div>
    </div>
  )
}

export default MotionWrap(Containereq2);