import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {

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
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });
  };

  totalValue = () => {
    var total = 0;
    for(var i = 0; i<this.state.counters.length; i++) {
      total += this.state.counters[i].value;
    }
    return total;
  }

  render() {
    return (
      <React.Fragment>
        <NavBar total = {this.totalValue()} />
        {/* <NavBar total = {this.state.counters.filter(c => c.value !== 0).length} /> */}
        <main className="container ">
          <Counters 
            counters = {this.state.counters}
            onIncrement = {this.handleIncrement}
            onDecrement = {this.handleDecrement}
            onDelete = {this.handleDelete}
            onReset = {this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
