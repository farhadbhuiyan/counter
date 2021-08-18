import { Component } from "react";
import Counter from "./counter.component";
import Header from "./header.component";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const all_counter = this.state.counters.map((counter, indx) => {
      const obj = { id: indx, value: 0 };
      return obj;
    });
    this.setState({ counters: all_counter });
  };

  handleIncriment = (id) => {
    const counters = this.state.counters.map((counter, index) => {
      if (counter.id === id) return { id: index, value: counter.value + 1 };
      return counter;
    });
    this.setState({ counters: counters });
  };

  handleDecriment = (id) => {
    const counters = this.state.counters.map((counter, index) => {
      if (counter.id === id) return { id: index, value: counter.value - 1 };
      return counter;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters: counters });
    console.log(counters);
  };

  render() {
    return (
      <>
        <Header
          totalUpdates={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />

        <div className="container">
          <button
            onClick={this.handleReset}
            type="button"
            className=" btn btn-primary"
          >
            Reset
          </button>
        </div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onIncriment={this.handleIncriment}
            onDecriment={this.handleDecriment}
            onDelete={this.handleDelete}
          />
        ))}
      </>
    );
  }
}

export default Counters;
