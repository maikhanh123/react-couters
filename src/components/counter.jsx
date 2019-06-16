import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  //   constructor(){
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  // }
  

  render() {
    return (
      <div className="row">
        {console.log(this.props)}
        {
          this.props.counter.value === 0 
          && 
          "There are no counter" 
          ||  
          <React.Fragment>
            <div className="col-1">
              {this.props.children}
              <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
              <button
                onClick={this.props.onIncrement}
                className="btn btn-secondary"
              >
                +
              </button>

              <button
                onClick={this.props.onDecrement}
                className="btn btn-secondary m-2"
                disabled={this.props.counter.value === 0}
              >
                -
              </button>

              <button onClick={this.props.onDelete} className="btn btn-danger">
                Delete
              </button>
            </div>
          </React.Fragment>
          
        }
       
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
  };
}

export default Counter;
