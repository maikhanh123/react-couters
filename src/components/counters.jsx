import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <div className="container p-2">
        <button className="btn btn-primary m-2" onClick={this.handleReset}>
          reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => this.handleDelete(counter.id)}
            onIncrement={() => this.handleIncrement(counter)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
