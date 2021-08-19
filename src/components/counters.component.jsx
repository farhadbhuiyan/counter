import { Component } from "react";
import Counter from "./counter.component";

class Counters extends Component {
  render() {
    return (
      <>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onIncriment={this.props.onIncriment}
            onDecriment={this.props.onDecriment}
            onDelete={this.props.onDelete}
          />
        ))}
      </>
    );
  }
}

export default Counters;
