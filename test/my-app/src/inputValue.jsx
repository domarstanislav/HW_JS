import React, { Component } from 'react'

class InputValue extends Component {
    render() {
        return (
            <div>
                <input value={this.props.show} readOnly ={true} type="text"/>
            </div>
        )
    }
}
export default InputValue;