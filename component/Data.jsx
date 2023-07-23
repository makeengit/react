import React, { Component } from 'react'

export default class Data extends Component {
    constructor(){
        super()
        this.state= {
            plants : ['Tree','Flower','Fruit']
        }
    }
  render() {
    return (
        <>
            <ul>
                {this.state.plants.map((c)=> <li>{c}</li> )}
            </ul>
        </>
    )
  }
}
