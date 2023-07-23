import React, { Component } from 'react'
import Button from './Button'
import Card from './Card'

export default class Home extends Component {
  render() {
    return (
        <>
        <h1>This is Home Page</h1>
        <Button k='test'/>
        <Button k='Go!'/>

        <Card name='Alia' age='10'/>
        </>
    )
  }
}
