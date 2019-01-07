import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary m-2" onClick={this.props.onReset}>
          reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => this.props.onDelete(counter.id)}
            onIncrement={() => this.props.onIncrement(counter)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
