import React, { Component } from 'react'
import Cards from './Cards'
import Contact from './Contact'

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            //array of object 
            cards : [
                {title:"some t1",des:"des1 nananananana"},
                {title:"some t2",des:"des2 tatatatatat"},
                {title:"some t3",des:"des3 wowowowowowo"}
            ]
        }
    }
  render() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {this.state.cards.map((card)=>
                    <Cards title={card.title} des={card.des} />)}
                </div>
            </div>
            <Contact/>
        </>
        )
  }
}
