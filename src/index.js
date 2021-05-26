import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './styles/main.css'

const mount = document.querySelector('.app')

ReactDom.render(<App />, mount)

