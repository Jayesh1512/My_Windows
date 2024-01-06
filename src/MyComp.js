import React from 'react'
import './MyComp.css'


function MyComp(props) {
  return (
    <div className='app'>
      <img src = {props.img} ></img>
      <div className='appname'>{props.appname}</div>

    </div>
  )
}

export default MyComp
