import React, { Component } from 'react'
import Card from './Card'
import m1 from '../person_5.jpg.webp'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Card name="Alaa" job="Artist" img={m1}/>
        
      </div>
    )
  }
}
