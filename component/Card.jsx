import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let {name,age} = this.props
    return (
        <div>
            <h2>your Name is :{name}</h2>
            <h3>your Age is : {age}</h3>
        </div>
    )
  }
}
