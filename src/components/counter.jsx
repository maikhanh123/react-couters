import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

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
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-info"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = productId => {
    console.log(productId);
    this.setState({ count: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
