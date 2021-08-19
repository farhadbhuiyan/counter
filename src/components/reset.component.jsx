import React, { Component } from "react";

class Reset extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <button
          onClick={this.props.onReset}
          type="button"
          className=" btn btn-primary"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Reset;
