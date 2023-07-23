import React, { Component } from 'react'

export default class Count extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
    }
    
  render() {
    return (
<>
        <h2>The COUNT IS :{this.state.count}</h2>
        <button onClick={this.increamen}>INCREASE</button>
        <button onClick={this.decrease}>DECREASE</button>
        <button onClick={this.reset}>RESET</button>
</>
    )
  }
  increamen = ()=>{
    this.setState({'count':++this.state.count})
  }
  decrease = ()=>{
    this.setState({'count':--this.state.count})
  }
  reset = ()=>{
    this.setState({'count': 0})
  }

}
