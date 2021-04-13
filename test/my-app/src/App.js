import React, { Component } from 'react'
import Test from './addInput.jsx'
import InputValue from './inputValue.jsx'
import Input from './input.jsx'
class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    value : 0
  }
}

handleClick =()=> {
  this.setState({
    value: this.state.value + 1,
  });
}
     changeValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

render(){
  return (
    <div>
    <Input
     rangeInp={this.changeValue}
    />
    <InputValue
    show = {this.state.value}
    />
     <div className="App">
        <Test
          trigger={15}
          value={this.state.value}
          handleClick={this.handleClick}
        />
      </div>
    </div>

  );
}
}

export default App;
