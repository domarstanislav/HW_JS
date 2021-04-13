import React, { Component } from "react";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          val: 0,
        };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value <= props.trigger) {
      return {
        val: props.value,
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <input type="text" readOnly={true} value={this.state.val} />
        <button onClick={this.props.handleClick}>Add+1</button>
      </div>
    );
  }
}

export default Test;