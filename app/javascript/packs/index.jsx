import React from 'react'
import ReactDOM from 'react-dom'
import Main from '../components/Main'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div className="container">
      <Main />
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
