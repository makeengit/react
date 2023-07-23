import React, { Component } from 'react'

export default class Counter extends Component {
constructor(){
    super()
    this.state ={
        count : 0,
        cars : ['Borsh','miniCoper','GT']
    }
}
  render() {
    return (
        <>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.increas}>increas</button>
        <button onClick={this.decreas}>decreas</button>
        <button onClick={this.reset}>reset</button>

       
                <ol>
                    {this.state.cars.map((c)=> <li>{c}</li>)}
                </ol>
           
        </>

    )
  }
  increas = ()=>{
    this.setState({'count': ++this.state.count})
  }

  decreas = ()=>{
    this.setState({'count': --this.state.count})
  }
  reset = ()=>{
    this.setState({'count': this.state.count=0})
  }



}
  

