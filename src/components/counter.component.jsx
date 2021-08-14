import { Component } from "react";

class Counter extends Component {
  state = {
    items: [0],
  };

  getFormat = () => {
    if (this.state.items[0] === 0) return "Zero";
    else return this.state.items[0];
  };

  handleIncriment = () => {
    const array = [...this.state.items];
    array[0]++;

    this.setState({ items: array });
  };

  handleDecriment = () => {
    const array = [...this.state.items];
    array[0]--;
    this.setState({ items: array });
  };

  render() {
    return (
      <>
        <ul className="container">
          <li class="list-unstyled">
            <div>
              <span
                className={
                  this.state.items[0] === 0
                    ? "badge bg-warning p-2 mr-5"
                    : "badge bg-primary p-2 mr-5"
                }
              >
                {this.getFormat()}
              </span>
              <button
                onClick={this.handleIncriment}
                type="button"
                class="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                onClick={this.handleDecriment}
                type="button"
                class="btn btn-secondary m-2"
                disabled={this.state.items[0] === 0 ? "disabled" : ""}
              >
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default Counter;
