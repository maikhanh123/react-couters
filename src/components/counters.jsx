import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {

    //Destructuring Arguments
    const { counters, onReset, onDelete, onIncrement } = this.props;
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
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
