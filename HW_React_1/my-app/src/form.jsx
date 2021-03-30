import React, { Component } from 'react'
import Input from './input.jsx'

class Form extends Component {
    render() {
        return (
            <div>
                <p>
                    <b>
                        Sing in
                    </b>
                </p>
               <Input type = "name"/>
               <Input type ="surname"/> 
               <Input type = "password"/>
            </div>
        )
    }
}
export default Form
