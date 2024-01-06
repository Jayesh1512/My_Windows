import React from 'react'
import './Display.css'
import { BrowserRouter } from 'react-router-dom'

export default function Display() {
  return (
    <div className = "body">
      <div className='app-name'>My Computer</div>
      <div className = "inner-box">
        <div className='content'>
          <div className='myname'>Jayesh Shete</div>
          <p className='engineer'>Computer Science Engineer</p> 
                    
        </div>
      </div>
    </div>
  )
}
