import React from 'react'
import ReactDOM from 'react-dom'
import Main from '../components/Main'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})
