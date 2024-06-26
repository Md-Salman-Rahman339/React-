import React, { Component } from 'react'
import './style.css'
export default class State extends Component {
    constructor(props) {
        super(props)
        this.state={
            count:0
        }
        
    }
    handleincreament=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handledecreament=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
      render() {
    const {count}=this.state
    return (
      <div>
        <h1>Count:{count}</h1>
        <button onClick={this.handleincreament}>+</button>
        <button onClick={this.handledecreament} disabled={count===0?true:false}>-</button>
      </div>
    )
  }
}

