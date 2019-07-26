import React from 'react'
import './A4.css'

const A4 = ({ children }) => {
  return (
    <div className="A4-outer">
      <div className="A4-inner">
        { children }
      </div>
    </div>
  );
}

export default A4
