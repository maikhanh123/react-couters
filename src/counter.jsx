import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2"]
  };

  //   constructor(){
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-info"
        >
          Increment
        </button>

        <div>
          {this.state.tags.length === 0 && <p>Please create a new tag</p>}
          {this.renderTag()}
        </div>
      </div>
    );
  }

  handleIncrement = productId => {
    console.log(productId);
    this.setState({ count: this.state.count + 1 });
  };

  renderTag() {
    if (this.state.tags.length === 0) {
      return <p>There are no tag</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
