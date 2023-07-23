import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    return (
      <div>
        <div className="card">
  
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.des}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}
