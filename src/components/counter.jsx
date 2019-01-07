import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
    
  // };

  //   constructor(){
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  render() {
    return (
      <div style={{marginBottom: 10}}>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.props.onIncrement}
          className="btn btn-info"
        >
          Increment
        </button>

        <button onClick={this.props.onDelete} className="btn btn-danger ml-2">Delete</button>
      </div>
    );
  }

  // handleIncrement = () => {
  //   this.setState({ value: this.props.counter.value + 1 });
  // };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount = () => {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
