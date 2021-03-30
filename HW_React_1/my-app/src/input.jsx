import React, { Component } from 'react'
import "./App.css"

class Input extends Component {
    render() {
        return (
            <div>
                <input className = "inp" placeholder = {this.props.type}/>
            </div>
        )
    }
}

export default Input