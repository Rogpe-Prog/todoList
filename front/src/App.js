import React from 'react'
import Menu from '../src/template/menu'
import Routes from './routes'
import '../src/template/custom.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  )
}

export default App
