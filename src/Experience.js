import React from 'react'
import './Experience.css'

const Experience = ({ content }) => {
  return (
    <div className="Experience">
      <div className="title">Experience</div>
      <div className="container">
      {
        content.map(({ title, position, items }) => {
          return (
            <div className='item'>
              <div className='title'>{ title }</div>
              <div className='position'>{ position }</div>
              <ul className='content'>
              {
                items.map(point => {
                  return (
                    <li>{ point }</li>
                  )
                })
              }
              </ul>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Experience
