import { Component } from "react";

class Counter extends Component {
  getFormat = () => {
    if (this.props.value === 0) return "Zero";
    else return this.props.value;
  };

  render() {
    return (
      <>
        <ul className="container">
          <li class="list-unstyled">
            <div>
              <span
                className={
                  this.props.value === 0
                    ? "badge bg-warning p-2 mr-5"
                    : "badge bg-primary p-2 mr-5"
                }
              >
                {this.getFormat()}
              </span>
              <button
                onClick={() => this.props.onIncriment(this.props.id)}
                type="button"
                class="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                onClick={() => this.props.onDecriment(this.props.id)}
                type="button"
                class="btn btn-secondary m-2"
                disabled={this.props.value === 0 ? "disabled" : ""}
              >
                -
              </button>
              <button
                type="button"
                class="btn btn-danger m-2"
                onClick={() => this.props.onDelete(this.props.id)}
              >
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
