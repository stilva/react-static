import React from 'react'
import { withRouteData } from 'react-static'
//
import logoImg from '../logo.png'

export default withRouteData(({lastUpdate}) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
    <p>last updated on <time>{new Date(lastUpdate).toString()}</time></p>
  </div>
))
