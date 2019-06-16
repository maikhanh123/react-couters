import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {

    //Destructuring Arguments
    const { counters, onReset, onDelete, onIncrement, onDecrement } = this.props;
    return (
      
      <React.Fragment>
        <button className="btn btn-primary m-2" onClick={onReset}>
          reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => onDelete(counter.id)}
            onIncrement={() => onIncrement(counter)}
            onDecrement={() => onDecrement(counter)}
          >
            <h4>Hello</h4> 
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
