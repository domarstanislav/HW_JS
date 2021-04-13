import React, { Component } from 'react'

class Input extends Component {
    render() {
        return (
            <div>
             <input type="range"  onChange = {this.props.rangeInp}/>   
            </div>
        )
    }
}
export default Input;