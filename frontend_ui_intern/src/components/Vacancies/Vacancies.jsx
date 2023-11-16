import React from 'react'
import './vacancies.css'

const Vacancies = () => {
  return (
    <div className="Conte">
        <h1>Open Vacancies</h1>
        <div className='cards'>
            <div className='fir'>
                <h2>Senior Full-Stack Engineer</h2>
                <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>€65-85k, 0.5-1.50% equity share options</li>
                </ul>
            </div>
            <div className='fir'>
                <h2>Senior Designer</h2>
                <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>€40-55k, 0.5-1.50% equity share options</li>
                </ul>
            </div>
            <div className='fir'>
                <h2>Superstar Intern</h2>
                <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>€20-24k, 0.5-1.50% equity share options</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Vacancies