import React from 'react'

const Divider = ({ text }) => {
  if (!text) {
    return (
      <div className='divider'>
        <div></div>
      </div>
    )
  }

  return (
    <div className='divider'>
      <div></div>
      <p>{text}</p>
      <div></div>
    </div>
  )
}

export default Divider