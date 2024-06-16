import React, { Component } from 'react'

class EVENT_HANDLING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        changedValue:''
         
      }
    }
    handleONCHange=(e)=>{
        this.setState({
            changedValue:e.target.value

        })

    }
    
  render() {
    return (
      <div>
        <input type='text'onChange={this.handleONCHange}></input>
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}

export default EVENT_HANDLING